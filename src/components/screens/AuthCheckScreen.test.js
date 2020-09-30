import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useSelector, useDispatch } from 'react-redux';
import AuthCheckScreen from './AuthCheckScreen/index';

const navigation = { navigate: jest.fn() };

function renderAuthCheckScreen() {
  return render(<AuthCheckScreen navigation={navigation} />);
}

describe('AuthCheckScreen', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      defaultMessage: 'None',
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without exploding', () => {
    const { container } = renderAuthCheckScreen();

    expect(container).toBeTruthy();
  });

  context('when click AuthCheckSelectButton', () => {
    it('calls button event', () => {
      const { getByText } = renderAuthCheckScreen();

      fireEvent.press(getByText('Phone'));

      expect(dispatch).toBeCalled();

      fireEvent.press(getByText('Email'));

      expect(dispatch).toBeCalled();
    });
  });
});
