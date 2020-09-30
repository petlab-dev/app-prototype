/* eslint-disable global-require */
import React from 'react';

import { QRButton, QRButtonImage, QRButtonText } from './style';

export default function HomeQR({ handleUrlPressButtonAsync }) {
  return (
    <QRButton
      onPress={() => handleUrlPressButtonAsync('https://expo.io/@dididy/fe')}
      style={{}}
    >
      <QRButtonImage
        opacity={0.5}
        source={require('../../assets/expo-qr.png')}
      />
      <QRButtonText>Mobile App(Expo) 실행</QRButtonText>
    </QRButton>
  );
}
