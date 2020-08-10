import React from 'react';

import { TouchableOpacity } from 'react-native';

import { SelectButton, SelectButtonColor } from '../styles';

export default function PreSignUpLoginSelectButton({ onClick, text, active }) {
  return (
    <SelectButton active={active}>
      <TouchableOpacity onClick={onClick}>
        <SelectButtonColor active={active}>{text}</SelectButtonColor>
      </TouchableOpacity>
    </SelectButton>
  );
}
