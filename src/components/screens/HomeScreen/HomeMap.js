/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';

import { View, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Location from 'expo-location';

import { useDispatch, useSelector } from 'react-redux';

import { setLongtitude, setLatitude } from '../../../slice';
import { get } from '../../../utils';

import {
  NAVER_MAP_API_ID,
  NAVER_MAP_API_SECRECT,
} from '../../../../environment';

import { CompassIconButton, MapButton, MapButtonImage } from './style';
import { COLOR_PRIMARY } from '../../constants';

export default function HomeMap({ navigation, handleUrlPressButtonAsync }) {
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

  return (
    <View>
      <CompassIconButton
        onPress={() => handleGetLocation()}
      >
        <Icon name="compass" size={30} color={COLOR_PRIMARY} />
      </CompassIconButton>
      <MapButton
        onPress={
          Platform.OS === 'web'
            ? () => handleUrlPressButtonAsync(
              `https://www.google.com/maps/search/%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90/@${location.y},${location.x},13z`,
            )
            : () => navigation.push('Web')
        }
      >
        <MapButtonImage
          opacity={0.5}
          source={{
            uri: `https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=300&h=300&scale=2&center=${location.x},${location.y}&level=${level}&X-NCP-APIGW-API-KEY-ID=${NAVER_MAP_API_ID}&X-NCP-APIGW-API-KEY=${NAVER_MAP_API_SECRECT}`,
          }}
        />
      </MapButton>
    </View>
  );
}
