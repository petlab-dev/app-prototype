import React from 'react';
import { render } from '@testing-library/react-native';

import { useSelector } from 'react-redux';
import HomeScreen from './HomeScreen/index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('expo-location', () => 'WebBrowser');

function renderHomeScreen() {
  return render(<HomeScreen />);
}
describe('HomeScreen', () => {
  beforeEach(() => {
    useSelector.mockImplementation(() => ('location'));
    useSelector.mockImplementation(() => ('profile'));
  });

  it('renders without exploding', () => {
    const { container } = renderHomeScreen();

    expect(container).toBeTruthy();
  });
});
