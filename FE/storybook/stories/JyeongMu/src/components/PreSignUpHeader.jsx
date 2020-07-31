import React from 'react';

import { Header, HeaderText } from '../styles';

export default function PreSignUpHeader({ text }) {
  return (
    <Header>
      <HeaderText>{text}</HeaderText>
    </Header>
  );
}
