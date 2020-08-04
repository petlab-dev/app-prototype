import React from 'react';

import { render } from '@testing-library/react-native';

import TestScreen from './TestScreen';

describe('Main', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<TestScreen />);

    expect(queryByText('Open up App.js to start working on your app!')).toBeTruthy();
  });
});
