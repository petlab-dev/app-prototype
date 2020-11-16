import React from 'react';
import { render } from '@testing-library/react-native';

import TermsHeader from './TermsHeader';

function renderTermsHeader() {
  return render(<TermsHeader />);
}
describe('TermsHeader', () => {
  it('renders without exploding', () => {
    const { container } = renderTermsHeader();

    expect(container).toBeTruthy();
  });

  it('renders text properly', () => {
    const { getByText } = renderTermsHeader();

    expect(getByText('약관동의')).toBeTruthy();
  });
});
