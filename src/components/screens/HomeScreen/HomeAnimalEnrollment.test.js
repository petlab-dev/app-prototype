import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { useDispatch } from 'react-redux';

import HomeAnimalEnrollment from './HomeAnimalEnrollment';

function renderHomeAnimalEnrollment() {
  return render(<HomeAnimalEnrollment />);
}

describe('HomeAnimalEnrollment', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders without exploding', () => {
    const { container } = renderHomeAnimalEnrollment();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderHomeAnimalEnrollment();

    expect(getByTestId('test-animal-enroll-image')).toBeTruthy();
  });

  it('renders texts properly', () => {
    const { getByText } = renderHomeAnimalEnrollment();

    expect(getByText('🐈 등록')).toBeTruthy();
    expect(getByText('보호자님의 사랑스러운')).toBeTruthy();
    expect(getByText('아이들을 등록해주세요!')).toBeTruthy();
  });

  context('when click HomeAnimalEnrollment button', () => {
    it('calls button event', () => {
      const { getByText } = renderHomeAnimalEnrollment();

      expect(getByText('🐈 등록')).not.toBeNull();

      expect(dispatch).toBeCalledTimes(0);

      fireEvent.press(getByText('🐈 등록'), {
        target: { value: 'toggleAuth' },
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
