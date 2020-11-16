import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useDispatch } from 'react-redux';

import IconButton from './IconButton';

import platformInfo from '../../../__fixtures__/platformInfo';

function renderIconButton(value = platformInfo[3]) {
  return render(<IconButton value={value} />);
}
describe('IconButton', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without exploding', () => {
    const { container } = renderIconButton();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders each platforomInfo data properly', () => {
      platformInfo.forEach((value) => {
        const { container } = renderIconButton(value);

        expect(container).toBeTruthy();
      });
    });
  });

  context('when click each IconButton', () => {
    it('calls button event', () => {
      const { getByTestId } = renderIconButton();

      expect(getByTestId('test-icon-button')).not.toBeNull();

      fireEvent.press(getByTestId('test-icon-button'));

      // expect().toBeCalled();
    });
  });

  // TODO: Test firebase logic
  // TODO: Test expo-auth-session logic (especially `makeRedirectUri`)
});
