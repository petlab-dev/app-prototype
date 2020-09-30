/* eslint-disable global-require */
import React from 'react';

import { PetImageBox, PetImage } from './style';

export default function PetImageSet({ data }) {
  return (
    <PetImageBox key={data.key}>
      <PetImage
        source={data.source}
        resizeMode="contain"
        testID="test-profile-pet-image"
      />
    </PetImageBox>
  );
}
