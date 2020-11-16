import React from 'react';
import { render } from '@testing-library/react-native';

import AuthCheckHeader from './AuthCheckHeader';

function renderAuthCheckHeader(text = 'mock') {
  return render(<AuthCheckHeader text={text} />);
}

describe('AuthCheckHeader', () => {
  it('renders without exploding', () => {
    const { container } = renderAuthCheckHeader();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders text properly', () => {
      const text = 'Header';
      const { getByText } = renderAuthCheckHeader(text);

      expect(getByText(text)).toBeTruthy();
    });
  });
});
