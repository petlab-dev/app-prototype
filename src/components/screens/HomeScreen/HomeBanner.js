/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';

import { View, Dimensions } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import { HomeBannerButton, HomeBannerContainer, BannerImage } from './style';

import adData from '../../../__fixtures__/adData';

export default function HomeBanner() {
  const scrollRef = useRef();

  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [seconds, setSeconds] = useState(0);

  function moveScroll(length) {
    if (scroll < 0 || scroll > width) {
      scrollRef.current?.scrollTo({
        x: 0,
        animated: true,
      });
      setScroll(0);
    } else {
      scrollRef.current?.scrollTo({
        x: scroll + length,
        animated: true,
      });
      setScroll(scroll + length);
    }
  }

  const handleUrlPressButtonAsync = async (
    url = 'https://gdppcat.com/index.html',
  ) => {
    await WebBrowser.openBrowserAsync(url);
  };

  useEffect(() => {
    if (Dimensions.get('window').width > 512) {
      setWidth(512);
    }

    const interval = setInterval(() => {
      if (width > 512) {
        moveScroll(512);
        return setSeconds(seconds + 1);
      }
      moveScroll(width);
      return setSeconds(seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View
      style={{
        width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      }}
    >
      <HomeBannerContainer
        ref={scrollRef}
        screenWidth={width}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {adData.map((value) => (
          <HomeBannerButton
            key={`s-${value.key}`}
            onPress={() => handleUrlPressButtonAsync(value.url)}
            screenWidth={width}
            resizeMode="filled"
            testID="test-ad-banner-button"
          >
            <BannerImage screenWidth={width} source={value.source} />
          </HomeBannerButton>
        ))}
      </HomeBannerContainer>
    </View>
  );
}
