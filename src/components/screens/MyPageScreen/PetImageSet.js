/* eslint-disable global-require */
import React from 'react';

import {
  PetImageBox,
  PetImage,
} from './style';

export default function PetImageSet({ data }) {
  return (
    data.map((value) => (
      <PetImageBox key={value.key}>
        <PetImage source={value.source} resizeMode="contain" />
      </PetImageBox>
    ))
  );
}
