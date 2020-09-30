import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HomeQR from './HomeQR';

const handleUrlPressButtonAsync = jest.fn();

function renderHomeQR(passedFunc = handleUrlPressButtonAsync) {
  return render(<HomeQR handleUrlPressButtonAsync={passedFunc} />);
}

describe('HomeQR', () => {
  it('renders without exploding', () => {
    const { container } = renderHomeQR();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderHomeQR();

    expect(getByTestId('test-qr-button-image')).toBeTruthy();
  });

  it('renders texts properly', () => {
    const { getByText } = renderHomeQR();

    expect(getByText('Mobile App(Expo) 실행')).toBeTruthy();
  });

  context('when click QRButton', () => {
    it('calls button event', () => {
      const { getByText } = renderHomeQR();

      const text = getByText('Mobile App(Expo) 실행');

      fireEvent.press(text);

      expect(handleUrlPressButtonAsync).toBeCalled();
    });
  });
});
