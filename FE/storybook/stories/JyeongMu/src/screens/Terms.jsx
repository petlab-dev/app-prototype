import React from 'react';

import TermsButton from '../components/TermsButton';
import TermsContents from '../components/TermsContents';
import TermsHeader from '../components/TermsHeader';
import TermsBottomButton from '../components/TermsBottomButton';

import {
  Container,
} from '../styles';

export default function Home() {
  return (
    <Container>
      <TermsHeader />
      <TermsContents />
      <TermsButton />
      <TermsBottomButton />
    </Container>
  );
}
