import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import AuthCheckHeader from './AuthCheckHeader';

const clickAuthCheckHeader = jest.fn();

function renderAuthCheckHeader(onClick = clickAuthCheckHeader, text = 'mock', active = true) {
  return render(<AuthCheckHeader onClick={onClick} text={text} active={active} />);
}

describe('AuthCheckHeader', () => {
  it('renders without exploding', () => {
    const { container } = renderAuthCheckHeader();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders text properly', () => {
      const text = 'Test';
      const { getByText } = renderAuthCheckHeader(undefined, text);

      expect(getByText(text)).toBeTruthy();
    });

    it('click select button calls propery', () => {
      const { getByText } = renderAuthCheckHeader();

      fireEvent.press(getByText('mock'));

      // expect(clickAuthCheckHeader).toBeCalled();
    });

    it('renders "active = false" properly', () => {
      // TODO:
    });
  });
});
