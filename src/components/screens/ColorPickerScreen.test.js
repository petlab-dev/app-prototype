import React from 'react';
import { render } from '@testing-library/react-native';

import ColorPickerScreen from './ColorPickerScreen/index';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('expo-camera', () => 'Camera');

describe('ColorPickerScreen', () => {
  it('renders without exploding', () => {
    const { container } = render(<ColorPickerScreen />);

    expect(container).toBeTruthy();
  });
  // TODO: render by hasPermission's value
  // TODO: render by screen's value
});
