import React from 'react';
import { render } from '@testing-library/react-native';

import PreSignUpClosingMent from './PreSignUpClosingMent';

describe('PreSignUpClosingMent', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<PreSignUpClosingMent />);

    expect(queryByText('You may receive SMS updates from')).toBeTruthy();
  });
});
