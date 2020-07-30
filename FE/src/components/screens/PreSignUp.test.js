import React from 'react';
import { render } from '@testing-library/react-native';

import PreSignUp from './PreSignUp';

describe('PreSignUp', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<PreSignUp />);

    expect(queryByText('Enter Phone or Email')).toBeTruthy();
  });
});
