import React from 'react';
import { Text } from 'react-native';
import {
  FolowButton,
  FolowButtonCount,
  FolowButtonText,
} from './style';

export default function FolowButtonComponent({ folowState, count }) {
  return (
    <FolowButton onPress={() => alert('클릭')}>
      <FolowButtonCount>{count}</FolowButtonCount>
      <FolowButtonText>{folowState}</FolowButtonText>
    </FolowButton>
  );
}
