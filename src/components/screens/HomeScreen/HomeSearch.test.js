import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import HomeSearch from './HomeSearch';

function renderHomeSearch() {
  return render(<HomeSearch />);
}

describe('HomeSearch', () => {
  it('renders without exploding', () => {
    const { container } = renderHomeSearch();

    expect(container).toBeTruthy();
  });

  it('renders image properly', () => {
    const { getByTestId } = renderHomeSearch();

    expect(getByTestId('test-serach-image')).toBeTruthy();
  });

  context('when change text on input box', () => {
    const { getByTestId } = renderHomeSearch();

    const newTestValue = 'ABC';
    const input = getByTestId('test-search-box');

    fireEvent.changeText(input, newTestValue);

    // TODO: check input text's change
  });

  context('when click HomeSearch Button', () => {
    it('calls button event', () => {
      const { getByTestId } = renderHomeSearch();

      fireEvent.press(getByTestId('test-search-button'));

      // expect().toBeCalled(); <- handlePressButtonAsync
    });
  });
});
