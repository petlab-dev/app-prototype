import React from 'react';
import {
  FollowButton,
  FollowButtonCount,
  FollowButtonText,
} from './style';

export default function FollowButtonWrapper({ followState, count }) {
  return (
    <FollowButton onPress={() => {}}>
      <FollowButtonCount>{count}</FollowButtonCount>
      <FollowButtonText>{followState}</FollowButtonText>
    </FollowButton>
  );
}
