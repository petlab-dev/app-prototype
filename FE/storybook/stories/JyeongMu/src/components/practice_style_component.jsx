import React from 'react';
import styled from 'styled-components';

const Header = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const HeaderText = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default function PracticeStyleComponent() {
  return (
    <Header>
      <HeaderText> PracticeStyleComponent </HeaderText>
    </Header>
  );
}
