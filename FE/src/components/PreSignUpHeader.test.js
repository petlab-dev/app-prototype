import React from 'react';
import { render } from '@testing-library/react-native';

import PreSignUpHeader from './PreSignUpHeader';

describe('PreSignUpHeader', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<PreSignUpHeader text="test" />);

    expect(queryByText('test')).toBeTruthy();
  });
});
