import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HomeBuyBanner from './HomeBuyBanner';

function renderHomeBuyBanner() {
  return render(<HomeBuyBanner />);
}

describe('HomeBuyBanner', () => {
  global.alert = jest.fn();

  it('renders without exploding', () => {
    const { container } = renderHomeBuyBanner();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderHomeBuyBanner();

    expect(getByTestId('test-buy-banner-image')).toBeTruthy();
  });

  context('when click HomeBuyBanner button', () => {
    it('calls button event', () => {
      const { getByTestId } = renderHomeBuyBanner();

      const button = getByTestId('test-banner-button');

      expect(button).not.toBeNull();

      expect(global.alert).toBeCalledTimes(0);

      fireEvent.press(button);

      expect(global.alert).toBeCalledTimes(1);
      expect(global.alert).toHaveBeenCalledWith('판매 준비중입니다.');
    });
  });
});
