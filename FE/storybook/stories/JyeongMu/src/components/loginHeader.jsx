/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { Header, HeaderText } from '../styles';

export default function LoginHeader({ text }) {
  return (
    <Header>
      <HeaderText>{text}</HeaderText>
    </Header>
  );
}
