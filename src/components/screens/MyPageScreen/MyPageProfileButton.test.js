import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import MyPageProfileButton from './MyPageProfileButton';

function renderMyPageProfileButton(name = 'Test Name') {
  return render(<MyPageProfileButton name={name} />);
}

describe('MyPageProfileButton', () => {
  it('renders without exploding', () => {
    const { container } = renderMyPageProfileButton();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders name text properly', () => {
      const text = 'Yongjae Lee';
      const { getByText } = renderMyPageProfileButton(text);

      expect(getByText(text)).toBeTruthy();
    });
  });

  context('when click Profile Button', () => {
    it('calls button event', () => {
      const { getByText } = renderMyPageProfileButton();

      fireEvent.press(getByText('Test Name'));

      // expect().toBeCalled();
    });
  });
});
