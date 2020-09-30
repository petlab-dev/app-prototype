/* eslint-disable global-require */
import React, { useState, useEffect, useRef } from 'react';

import { View, Dimensions } from 'react-native';

import * as WebBrowser from 'expo-web-browser';

import { HomeBannerButton, HomeBannerContainer, BannerImage } from './style';

const adData = [
  {
    key: 1,
    url: 'https://www.seoulpetshow.co.kr/',
    source: require('../../assets/Ad/1.png'),
  },
  {
    key: 2,
    url: 'https://www.suwonpetshow.co.kr/',
    source: require('../../assets/Ad/2.png'),
  },
  {
    key: 3,
    url: 'https://gdppcat.com/index.html',
    source: require('../../assets/Ad/3.png'),
  },
];

export default function HomeBanner() {
  const scrollRef = useRef();

  const [scroll, setScroll] = useState(0);
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [seconds, setSeconds] = useState(0);

  function moveScroll(direction) {
    if (scroll < 0 || scroll > width) {
      scrollRef.current?.scrollTo({
        x: 0,
        animated: true,
      });
      setScroll(0);
    } else {
      scrollRef.current?.scrollTo({
        x: scroll + direction,
        animated: true,
      });
      setScroll(scroll + direction);
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
          >
            <BannerImage screenWidth={width} source={value.source} />
          </HomeBannerButton>
        ))}
      </HomeBannerContainer>
    </View>
  );
}
