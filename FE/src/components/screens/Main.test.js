import React from 'react';
import { render } from '@testing-library/react-native';

import Main from './Main';

describe('Main', () => {
  it('renders without exploding', () => {
    const { queryByText } = render(<Main />);

    expect(queryByText('Open up App.js to start working on your app!')).toBeTruthy();
  });
});
