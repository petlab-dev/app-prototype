import React from 'react';

import { HomeHeaderContainer, Title } from './style';

export default function HomeHeader({ text }) {
  return (
    <HomeHeaderContainer>
      <Title>{text}</Title>
    </HomeHeaderContainer>
  );
}
