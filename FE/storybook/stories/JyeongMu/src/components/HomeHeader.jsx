import React from 'react';

import { HomeHeaderContainer, Title } from '../styles';

export default function HomeHeader({ text }) {
  return (
    <HomeHeaderContainer>
      <Title>{text}</Title>
    </HomeHeaderContainer>
  );
}
