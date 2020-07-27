/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import { Header, HeaderText } from '../styles';

export default function LoginHeader(props) {
  return (
    <Header>
      <HeaderText>{props.text}</HeaderText>
    </Header>
  );
}
