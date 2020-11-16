import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useDispatch } from 'react-redux';

import LoginScreen from './LoginScreen/index';

jest.mock('react-redux');
jest.mock('expo-auth-session');

function renderLoginScreen() {
  return render(<LoginScreen />);
}

describe('LoginScreen', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without exploding', () => {
    const { container } = renderLoginScreen();

    expect(container).toBeTruthy();
  });

  context('when click "로그인" button', () => {
    it('calls button event', () => {
      const { getByText } = renderLoginScreen();

      expect(getByText('로그인')).not.toBeNull();

      fireEvent.press(getByText('로그인'), {
        target: { value: 'toggleAuth' },
      });

      expect(dispatch).toBeCalled();
    });
  });
  // TODO: fix TypeError on 95-101(index.js)
});
