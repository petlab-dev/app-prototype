import React from 'react';
import { render } from '@testing-library/react-native';

import TermsScreen from './TermsScreen/index';

describe('TermsScreen', () => {
  it('renders without exploding', () => {
    const { container } = render(<TermsScreen />);

    expect(container).toBeTruthy();
  });
});
