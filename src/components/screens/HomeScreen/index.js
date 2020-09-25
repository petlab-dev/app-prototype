/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
import React, { useEffect, useState } from 'react';

import {
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Platform,
} from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Location from 'expo-location';

import { useDispatch, useSelector } from 'react-redux';

import { setLongtitude, setLatitude } from '../../../slice';
import { get } from '../../../utils';

import HomeAnimalEnrollment from './HomeAnimalEnrollment';
import HomeSearch from './HomeSearch';
import HomeBanner from './HomeBanner';

import {
  NAVER_MAP_API_ID,
  NAVER_MAP_API_SECRECT,
} from '../../../../environment';

import { HomeContainer } from './style';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const location = useSelector(get('location'));
  const profile = useSelector(get('profile'));

  const [errorMsg, setErrorMsg] = useState(null);
  const [level, setLevel] = useState(6);

  async function handleGetLocation() {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg(`Permission to access location was denied ${errorMsg}`);
    }

    const locationFrom = await Location.getCurrentPositionAsync({});
    const x = JSON.stringify(locationFrom.coords.longitude);
    const y = JSON.stringify(locationFrom.coords.latitude);
    if (x && y) {
      dispatch(setLatitude({
        x,
      }));
      dispatch(setLongtitude({
        y,
      }));
    }
    setLevel(13);
  }

  useEffect(() => {
    handleGetLocation();
    console.log('profile', profile);
  }, []);

  const handleUrlPressButtonAsync = async (url = 'https://www.naver.com') => {
    await WebBrowser.openBrowserAsync(url);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'white' }}
    >
      <HomeContainer>
        <HomeSearch />
        <HomeBanner />
        <HomeAnimalEnrollment />
        <TouchableOpacity
          onPress={() => {}}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            borderRadius: 20,
          }}
        >
          <Image
            opacity={0.5}
            style={{
              width: 300,
              height: 100,
              borderRadius: 20,
            }}
            source={{
              uri:
                'https://i2.wp.com/millepet.com/wp-content/uploads/2016/05/ahm_cat_litter_4.png?w=1200',
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => handleGetLocation()}
            style={{
              zIndex: 1,
              // position: 'absolute',
              paddingTop: 30,
              paddingRight: 20,
            }}
          >
            <Icon name="map-marker" size={30} color="#f44336" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              Platform.OS === 'web'
                ? () => handleUrlPressButtonAsync(
                  `https://www.google.com/maps/search/%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90/@${location.y},${location.x},13z`,
                )
                : () => navigation.push('Web')
            }
            style={{
              zIndex: 0,
              marginTop: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 20,
            }}
          >
            <Image
              opacity={0.5}
              style={{
                width: 300,
                height: 150,
                borderRadius: 20,
              }}
              source={{
                uri: `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&scale=2&center=${location.x},${location.y}&level=${level}&X-NCP-APIGW-API-KEY-ID=${NAVER_MAP_API_ID}&X-NCP-APIGW-API-KEY=${NAVER_MAP_API_SECRECT}`,
              }}
            />
          </TouchableOpacity>
          {Platform.OS === 'web' ? (
            <TouchableOpacity
              onPress={() => handleUrlPressButtonAsync('https://expo.io/@dididy/fe')}
              style={{
                width: 300,
                height: 150,
                zIndex: 0,
                marginTop: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                opacity={0.5}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 20,
                }}
                source={require('../../assets/expo-qr.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Mobile App(Expo) 실행
              </Text>
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>
      </HomeContainer>
    </ScrollView>
  );
}
