import React from 'react';

import { render } from '@testing-library/react-native';

import MainScreen from './MainScreen';

describe('Main', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<MainScreen />);

    expect(queryByText('Open up App.js to start working on your app!')).toBeTruthy();
  });
});
