/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
// import React, { useState } from 'react';
import React, { useEffect, useState, useContext } from 'react';

// import { View, ScrollView } from 'react-native';
import {
  TouchableOpacity,
  Image,
  ScrollView,
  View,
  Platform,
} from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Location from 'expo-location';

import { AuthContext } from '../../../contexts';

import HomeAnimalEnrollment from './HomeAnimalEnrollment';
// import HomeHospital from './HomeHospital';
import HomeSearch from './HomeSearch';
import HomeBanner from './HomeBanner';
// import { HomeContainer, HomeHospitalText, Beta } from './style';

import {
  NAVER_MAP_API_ID,
  NAVER_MAP_API_SECRECT,
} from '../../../../environment';

import { HomeContainer } from './style';

// const DataOfNearbyHospital = [
//   {
//     name: '성심 동물 메디컬 센터',
//     adress: '봉명동 548-11',
//     phone: '042-719-7566',
//     key: '1',
//   },
//   {
//     name: '로얄 동물 펫병원',
//     adress: '봉명동 669',
//     phone: '042-823-7583',
//     key: '2',
//   },
//   {
//     name: '대전동물메디컬센터 숲',
//     adress: '봉명동 664-3단지',
//     phone: '042-826-7584',
//     key: '3',
//   },
//   {
//     name: '도안 ECO종합 동물 병원',
//     adress: '11-13, 봉명서로',
//     phone: '042-485-7582',
//     key: '4',
//   },
//   {
//     name: '피니펫 동물병원',
//     adress: '어은동 105-7',
//     phone: '042-862-7588',
//     key: '5',
//   },
// ];

export default function HomeScreen({ navigation }) {
  const { location, setLocation } = useContext(AuthContext);

  // const [location, setLocation] = useState({ x: 127.1054221, y: 37.3591614 });
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
      setLocation({
        x,
        y,
      });
    }
    setLevel(13);
  }

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleUrlPressButtonAsync = async () => {
    console.log('abbabab');
    await WebBrowser.openBrowserAsync(
      `https://www.google.com/maps/search/%EB%8F%99%EB%AC%BC%EB%B3%91%EC%9B%90/@${location.y},${location.x},13z`
    );
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: 'white' }}
    >
      <HomeContainer>
        <HomeSearch />
        {/* <ScrollView showsVerticalScrollIndicator={true}> */}
        <HomeBanner />
        <HomeAnimalEnrollment />
        {/* <Beta source={require('../../../assets/Beta.png')} />
      <HomeHospitalText>가까운 동물병원</HomeHospitalText>
      <HomeHospital data={DataOfNearbyHospital} /> */}
        {/* </ScrollView> */}
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
            onPress={() => abc()}
            style={{
              zIndex: 1,
              position: 'absolute',
              paddingTop: 30,
              paddingRight: 20,
            }}
          >
            <Icon name="map-marker" size={30} color="#f44336" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={
              Platform.OS === 'web'
                ? () => handleUrlPressButtonAsync()
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
        </View>
      </HomeContainer>
    </ScrollView>
  );
}
