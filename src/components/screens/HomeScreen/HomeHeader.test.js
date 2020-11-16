import React from 'react';
import { render } from '@testing-library/react-native';

import HomeHeader from './HomeHeader';

function renderHomeHeader(text = 'mock') {
  return render(<HomeHeader text={text} />);
}

describe('HomeHeader', () => {
  it('renders without exploding', () => {
    const { container } = renderHomeHeader();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders text properly', () => {
      const text = 'Catsome';
      const { getByText } = renderHomeHeader(text);

      expect(getByText(text)).toBeTruthy();
    });
  });
});
