import React from 'react';

import {
  Container,
} from '../styles';
import SignupHeader from '../components/SignupHeader';
import SignupContents from '../components/SignupContents';
import SignupButton from '../components/SignupButton';

export default function Signup() {
  return (
    <Container>
      <SignupHeader />
      <SignupContents />
      <SignupButton />
    </Container>
  );
}
