import React from 'react';

import { Text } from 'react-native';
import { HomeBannerView, HomeBannerContainer } from './style';

export default function HomeBanner() {
  return (
    <HomeBannerContainer
      horizontal
    >
      <HomeBannerView>
        <Text>firstbaner</Text>
      </HomeBannerView>
      <HomeBannerView>
        <Text>secondbaner</Text>
      </HomeBannerView>
      <HomeBannerView>
        <Text>secondbaner</Text>
      </HomeBannerView>
      <HomeBannerView>
        <Text>secondbaner</Text>
      </HomeBannerView>
    </HomeBannerContainer>
  );
}
