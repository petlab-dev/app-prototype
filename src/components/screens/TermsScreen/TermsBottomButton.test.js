import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useDispatch } from 'react-redux';

import TermsBottomButton from './TermsBottomButton';

const navigation = { popToTop: jest.fn() };

function renderTermsBottomButton() {
  return render(<TermsBottomButton navigation={navigation} />);
}

describe('TermsBottomButton', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without exploding', () => {
    const { container } = renderTermsBottomButton();

    expect(container).toBeTruthy();
  });

  context('when click "취소" button', () => {
    it('calls button event', () => {
      const { getByText } = renderTermsBottomButton();

      expect(getByText('취소')).not.toBeNull();

      fireEvent.press(getByText('취소'));

      expect(navigation.popToTop).toBeCalled();
    });
  });

  context('when click "동의" button', () => {
    it('calls button event', () => {
      const { getByText } = renderTermsBottomButton();

      expect(getByText('동의')).not.toBeNull();

      fireEvent.press(getByText('동의'), {
        target: { value: 'toggleAuth' },
      });

      expect(dispatch).toBeCalled();
    });
  });
});
