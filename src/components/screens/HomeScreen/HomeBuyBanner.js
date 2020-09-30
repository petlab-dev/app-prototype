/* eslint-disable global-require */
import React from 'react';

import { BuyBannerButton, BuyBannerImage } from './style';

export default function HomeBuyBanner() {
  return (
    <BuyBannerButton
      onPress={() => alert('판매 준비중입니다.')}
      testID="test-banner-button"
    >
      <BuyBannerImage
        opacity={0.5}
        source={{
          uri:
            'https://i2.wp.com/millepet.com/wp-content/uploads/2016/05/ahm_cat_litter_4.png?w=1200',
        }}
        testID="test-buy-banner-image"
      />
    </BuyBannerButton>
  );
}
