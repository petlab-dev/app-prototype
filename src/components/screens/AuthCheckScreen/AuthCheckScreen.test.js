import React from 'react';
import { render } from '@testing-library/react-native';

import AuthCheckScreen from './index';

describe('PreSignUp', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<AuthCheckScreen />);

    expect(queryByText('Enter Phone or Email')).toBeTruthy();
  });
});
