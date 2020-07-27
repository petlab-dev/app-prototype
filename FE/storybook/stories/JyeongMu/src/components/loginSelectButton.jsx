/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { SelectButton, SelectButtonColor } from '../styles';

export default function LoginSelectButton({ onClick, text, active}) {
  return (
    <SelectButton>
      <TouchableOpacity onClick={onClick}>
        <SelectButtonColor active={active}>{text}</SelectButtonColor>
      </TouchableOpacity>
    </SelectButton>
  );
}
