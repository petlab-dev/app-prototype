import React from 'react';
import { render } from '@testing-library/react-native';

import ClosingMent from './ClosingMent';

function renderClosingMent() {
  return render(<ClosingMent />);
}

describe('ClosingMent', () => {
  it('renders without exploding', () => {
    const { container } = renderClosingMent();

    expect(container).toBeTruthy();
  });

  it('renders text properly', () => {
    const { getByText } = renderClosingMent();

    expect(getByText('You may receive SMS updates from')).toBeTruthy();
    expect(getByText('Instagram and can opt out at any time.')).toBeTruthy();
  });
});
