import React from 'react';
import { render } from '@testing-library/react-native';

import PreSignUpSelectButton from './PreSignUpSelectButton';

const handleClick = jest.fn();

describe('PreSignUpSelectButton', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<PreSignUpSelectButton onClick={handleClick} text="??" active />);

    expect(queryByText('??')).toBeTruthy();
  });
});
