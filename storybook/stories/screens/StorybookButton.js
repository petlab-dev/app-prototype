/* eslint-disable global-require */
import React from 'react';

import { Button } from 'react-native';

import { CenterView } from '../../../src/components/constants';

export default function StorybookButton() {
  return (
    <CenterView>
      <Button onPress={() => alert('Test')} title="Test Button" color="red" />
    </CenterView>
  );
}
