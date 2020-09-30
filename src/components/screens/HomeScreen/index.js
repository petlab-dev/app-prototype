/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */
import React from 'react';

import { ScrollView, Platform } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import HomeAnimalEnrollment from './HomeAnimalEnrollment';
import HomeSearch from './HomeSearch';
import HomeBanner from './HomeBanner';
import HomeBuyBanner from './HomeBuyBanner';
import HomeMap from './HomeMap';
import HomeQR from './HomeQR';

import { HomeContainer, ButtonContainer } from './style';

export default function HomeScreen({ navigation }) {
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
        <ButtonContainer>
          <HomeBuyBanner />
          <HomeMap
            handleUrlPressButtonAsync={handleUrlPressButtonAsync}
            navigation={navigation}
          />
          {Platform.OS === 'web' ? (
            <HomeQR handleUrlPressButtonAsync={handleUrlPressButtonAsync} />
          ) : (
            <></>
          )}
        </ButtonContainer>
      </HomeContainer>
    </ScrollView>
  );
}
