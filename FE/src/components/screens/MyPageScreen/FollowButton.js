import React from 'react';
import {
  FolowButton,
  FolowButtonCount,
  FolowButtonText,
} from './style';

export default function FollowButton({ folowState, count }) {
  return (
    <FolowButton onPress={() => {}}>
      <FolowButtonCount>{count}</FolowButtonCount>
      <FolowButtonText>{folowState}</FolowButtonText>
    </FolowButton>
  );
}
