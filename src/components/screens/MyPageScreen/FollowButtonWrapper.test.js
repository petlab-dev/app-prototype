import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import FollowButtonWrapper from './FollowButtonWrapper';

function renderFollowButtonWrapper(count = '0', renderText = 'mock') {
  return render(<FollowButtonWrapper count={count} renderText={renderText} />);
}

describe('FollowButtonWrapper', () => {
  it('renders without exploding', () => {
    const { container } = renderFollowButtonWrapper();

    expect(container).toBeTruthy();
  });

  context('when pass props', () => {
    it('renders count text properly', () => {
      const count = '1';

      const { getByText } = renderFollowButtonWrapper(count);

      expect(getByText(count)).toBeTruthy();
    });
    it('renders renderText properly', () => {
      const renderText = 'Follower';

      const { getByText } = renderFollowButtonWrapper(undefined, renderText);

      expect(getByText(renderText)).toBeTruthy();
    });
  });

  context('when click "취소" button', () => {
    it('calls button event', () => {
      const { getByText } = renderFollowButtonWrapper();

      fireEvent.press(getByText('0'));

      // expect().toBeCalled();
    });
  });
});
