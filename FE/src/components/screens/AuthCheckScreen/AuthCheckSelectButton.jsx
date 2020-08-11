import React from 'react';

import { TouchableOpacity } from 'react-native';

import { SelectButton, SelectButtonColor } from './style';

export default function AuthCheckSelectButton({ onClick, text, active }) {
  return (
    <SelectButton active={active}>
      <TouchableOpacity onClick={onClick}>
        <SelectButtonColor active={active}>{text}</SelectButtonColor>
      </TouchableOpacity>
    </SelectButton>
  );
}
