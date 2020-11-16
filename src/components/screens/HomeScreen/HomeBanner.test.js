import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import HomeBanner from './HomeBanner';

function renderHomeBanner() {
  return render(<HomeBanner />);
}

describe('HomeBanner', () => {
  // const setScroll = jest.fn();
  // const setWidth = jest.fn();
  // const setSeconds = jest.fn();

  // beforeEach(() => {
  //   useStateMock.mockImplementation((init) => [init, setScroll]);
  //   useStateMock.mockImplementation((init) => [init, setWidth]);
  //   useStateMock.mockImplementation((init) => [init, setSeconds]);
  // });

  it('renders without exploding', () => {
    const { container } = renderHomeBanner();

    expect(container).toBeTruthy();
  });

  context('when click each HomeBannerBUtton', () => {
    it('calls button event', () => {
      const { getAllByTestId } = renderHomeBanner();

      const adBanners = getAllByTestId('test-ad-banner-button');
      adBanners.forEach((value) => {
        expect(value).not.toBeNull();
        fireEvent.press(value);

        // expect().toBeCalled(); <- handleUrlPressButtonAsync
      });
    });
  });

  // expect(setScroll).not.toBeCalled();
  // expect(setWidth).not.toBeCalled();
  // expect(setSeconds).toBeCalled();
});
