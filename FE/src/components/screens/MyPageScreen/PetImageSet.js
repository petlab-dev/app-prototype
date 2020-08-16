/* eslint-disable global-require */
import React from 'react';

import {
  PetImgBox,
  PetImg,
  // PetImgText,
} from './style';

export default function PetImageSet({ data }) {
  return (
    data.map((value) => (
      <PetImgBox key={value.key}>
        <PetImg source={value.source} resizeMode="contain" />
      </PetImgBox>
    ))
  );
}
