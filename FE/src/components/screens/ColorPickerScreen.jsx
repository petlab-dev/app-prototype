import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Camera } from 'expo-camera';

import Environment from '../../../environment';
import firebase from '../../../firebase';
import { Container } from '../constants';

const CAMERA_SCREEN = 0;
const LOADING_SCREEN = 1;
const FINAL_SCREEN = 2;

export default function ColorPickerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [screen, setScreen] = useState(0);
  const [color, setColors] = useState([]);

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  function rgb2hsv(r, g, b) {
    const constants = {
      h: 0,
      s: 0,
      v: 0,
      diff: 0,
    };

    const rabs = r / 255;
    const gabs = g / 255;
    const babs = b / 255;
    constants.v = Math.max(rabs, gabs, babs);
    constants.diff = constants.v - Math.min(rabs, gabs, babs);
    const diffc = (c) => (constants.v - c) / 6 / constants.diff + 1 / 2;
    const percentRoundFn = (num) => Math.round(num * 100) / 100;
    if (constants.diff === 0) {
      constants.h = 0;
      constants.s = 0;
    } else {
      constants.s = constants.diff / constants.v;
      const rr = diffc(rabs);
      const gg = diffc(gabs);
      const bb = diffc(babs);

      if (rabs === constants.v) {
        constants.h = bb - gg;
      } else if (gabs === constants.v) {
        constants.h = 1 / 3 + rr - bb;
      } else if (babs === constants.v) {
        constants.h = 2 / 3 + gg - rr;
      }
      if (constants.h < 0) {
        constants.h += 1;
      } else if (constants.h > 1) {
        constants.h -= 1;
      }
    }
    // return Math.round(h * 360);
    return {
      h: Math.round(constants.h * 360),
      s: percentRoundFn(constants.s * 100),
      v: percentRoundFn(constants.v * 100),
    };
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  async function uploadImage(uri) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = await firebase.storage().ref().child('my-image');
    const snapshot = await ref.put(blob);
    await blob.close();
    return snapshot.ref.getDownloadURL();
  }

  async function submitToGoogle(imageUri) {
    try {
      const body = await JSON.stringify({
        requests: [
          {
            features: [{ type: 'IMAGE_PROPERTIES', maxResults: 10 }],
            image: {
              source: {
                imageUri,
              },
            },
          },
        ],
      });
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${Environment['GOOGLE_CLOUD_VISION_API_KEY']}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body,
        },
      );
      const responseJson = await response.json();
      // await console.log(
      //   'response',
      //   responseJson.responses[0].imagePropertiesAnnotation.dominantColors
      //     .colors,
      // );
      await setColors(
        responseJson.responses[0].imagePropertiesAnnotation.dominantColors.colors.map(
          (value) => {
            console.log(
              rgb2hsv(value.color.red, value.color.green, value.color.blue)
            );
            return rgbToHex(
              value.color.red,
              value.color.green,
              value.color.blue,
            );
          },
        ),
      );
      console.log('Upload Done');
    } catch (error) {
      console.log('url: ', imageUri);
      console.log('error: ', error);
      setScreen(0);
    }
  }

  async function takePicture() {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const sourceFrom = await data.uri;
      if (sourceFrom) {
        await cameraRef.current.pausePreview();
        await setScreen(LOADING_SCREEN);
        const downloadUri = await uploadImage(sourceFrom);
        await submitToGoogle(downloadUri);
        await setScreen(FINAL_SCREEN);
      }
    }
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      {
        {
          [CAMERA_SCREEN]: (
            <Camera
              ref={cameraRef}
              style={{ flex: 1 }}
              // type={type}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}
              >
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                  }}
                  onPress={() => takePicture()}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                  >
                    Shutter
                  </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          ),
          [LOADING_SCREEN]: (
            <Container>
              <ActivityIndicator color="black" size="large" />
            </Container>
          ),
          [FINAL_SCREEN]: (
            <View>
              {color.map((value) => (
                <View
                  key={`k-${value}`}
                  style={{
                    height: '9%',
                    width: '100%',
                    backgroundColor: value,
                  }}
                />
              ))}
              <TouchableOpacity onPress={() => setScreen(CAMERA_SCREEN)}>
                <Text>back to camera</Text>
              </TouchableOpacity>
            </View>
          ),
        }[screen]
      }
    </View>
  );
}
