import React, { useState, useEffect, useRef } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';

import { Camera } from 'expo-camera';

import Icon from 'react-native-vector-icons/FontAwesome';

import VictoryPieChart from './VictoryPieChart';
import VictoryPieChartWeb from './VictoryPieChart.web';

import firebase from '../../../../firebase';
import { Environment } from '../../../../environment';

import { Container, CameraContainer, CameraButton } from './style';

const CAMERA_SCREEN = 0;
const LOADING_SCREEN = 1;
const FINAL_SCREEN = 2;

export default function ColorPickerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [screen, setScreen] = useState(0);
  const [color, setColors] = useState([]);
  const [detect, setDetect] = useState([]);
  const [none, setNone] = useState(true);

  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') {
        const permission = await Camera.isAvailableAsync();
        return setHasPermission(permission);
      }

      const { status } = await Camera.requestPermissionsAsync();
      return setHasPermission(status === 'granted');
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
    const h = Math.round(constants.h * 360);
    const s = percentRoundFn(constants.s * 100);
    const v = percentRoundFn(constants.v * 100);

    if (s < 20 || v < 20) {
      return 1;
    }

    // 330 < Red, Orange, Yellow < 60 | 60 < Green < 150 | 150 < Blue < 270 | 270 < PurPle < 330
    // white: R > 217, G > 217, B > 217
    // black: R + G + B <= 64
    if (h > 150 || h < 330) {
      setNone(false);
      return 2;
    }

    return 1;
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }

  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }

  function reset() {
    setColors([]);
    setDetect([]);
    setScreen(0);
    setNone(true);
  }

  async function uploadImage(uri) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = await firebase.storage().ref().child('my-image');
    const snapshot = await ref.put(blob);

    if (Platform.OS !== 'web') {
      await blob.close();
    }

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
        `https://vision.googleapis.com/v1/images:annotate?key=${Environment.GOOGLE_CLOUD_VISION_API_KEY}`,
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

      await setColors(
        responseJson.responses[0].imagePropertiesAnnotation.dominantColors.colors.map(
          (value) => {
            setDetect((detectVal) => [
              ...detectVal,
              {
                x: rgb2hsv(
                  value.color.red,
                  value.color.green,
                  value.color.blue,
                ),
                y: 1,
              },
            ]);

            return rgbToHex(
              value.color.red,
              value.color.green,
              value.color.blue,
            );
          },
        ),
      );

      console.log('Upload Done\n\n');
    } catch (error) {
      reset();

      console.log('url: ', imageUri, '\nerror: ', error);
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
    return (
      <Container>
        <Icon name="exclamation-triangle" size={40} color="gray" />
        <Text style={{ fontWeight: 'bold' }}>No access to camera</Text>
      </Container>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {
        {
          [CAMERA_SCREEN]: (
            <Camera ref={cameraRef} style={{ flex: 1 }}>
              <CameraContainer>
                <CameraButton onPress={() => takePicture()}>
                  <Container>
                    <Icon name="stethoscope" size={50} color="#f44336" />
                  </Container>
                </CameraButton>
              </CameraContainer>
            </Camera>
          ),
          [LOADING_SCREEN]: (
            <Container>
              <ActivityIndicator color="black" size="large" />
            </Container>
          ),
          [FINAL_SCREEN]: (
            <Container>
              <TouchableOpacity onPress={() => reset()}>
                {Platform.OS === 'web' ? (
                  <VictoryPieChartWeb
                    colors={color}
                    detect={detect}
                    none={none}
                  />
                ) : (
                  <VictoryPieChart colors={color} detect={detect} none={none} />
                )}
              </TouchableOpacity>
            </Container>
          ),
        }[screen]
      }
    </View>
  );
}
