import React from 'react';

import { Header, HeaderText } from './style';

export default function AuthCheckHeader({ text }) {
  return (
    <Header>
      <HeaderText>{text}</HeaderText>
    </Header>
  );
}
