import React from 'react';
import { render } from '@testing-library/react-native';

import TopText from './TopText';

function renderTopText() {
  return render(<TopText />);
}
describe('TopText', () => {
  it('renders without exploding', () => {
    const { container } = renderTopText();

    expect(container).toBeTruthy();
  });

  it('renders text properly', () => {
    const { getByText } = renderTopText();

    expect(getByText('안녕하세요,')).toBeTruthy();
    expect(getByText('🐈 건강지킴이 Catmate 입니다.')).toBeTruthy();
  });
});
