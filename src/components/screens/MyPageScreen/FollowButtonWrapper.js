import React from 'react';
import {
  FollowButton,
  FollowButtonCount,
  FollowButtonText,
} from './style';

export default function FollowButtonWrapper({ renderText, count }) {
  return (
    <FollowButton onPress={() => {}}>
      <FollowButtonCount>{count}</FollowButtonCount>
      <FollowButtonText>{renderText}</FollowButtonText>
    </FollowButton>
  );
}
