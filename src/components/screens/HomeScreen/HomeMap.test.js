import React from 'react';
import { Platform } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import { useSelector } from 'react-redux';

import HomeMap from './HomeMap';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('expo-location', () => 'Location');

const navigation = { push: jest.fn() };

const handleUrlPressButtonAsync = jest.fn();
function renderHomeMap() {
  return render(
    <HomeMap handleUrlPressButtonAsync={handleUrlPressButtonAsync} navigation={navigation} />,
  );
}

const setPlatform = function (platform) {
  Object.defineProperty(Platform, 'OS', {
    get: jest.fn(() => platform),
  });
};

describe('HomeMap', () => {
  useSelector.mockImplementation(() => ('location'));
  useSelector.mockImplementation(() => ('profile'));

  it('renders without exploding', () => {
    const { container } = renderHomeMap();

    expect(container).toBeTruthy();
  });

  context('when click CompassIconButton', () => {
    const { getByTestId } = renderHomeMap();

    fireEvent.press(getByTestId('test-compass-button'));

    // expect().toBeCalled(); <- handleGetLocation()
  });

  context('when click MapButton', () => {
    it('calls button evnet: Web', () => {
      setPlatform('web');

      const { getByTestId } = renderHomeMap();

      fireEvent.press(getByTestId('test-map-button'));

      expect(handleUrlPressButtonAsync).toBeCalled();
    });

    it('calls button evnet: iOS', () => {
      setPlatform('ios');

      const { getByTestId } = renderHomeMap();

      fireEvent.press(getByTestId('test-map-button'));

      expect(navigation.push).toBeCalled();
    });
  });
});
