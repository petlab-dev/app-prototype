import React from 'react';

import TermsButton from './TermsButton';
import TermsContents from './TermsContents';
import TermsHeader from './TermsHeader';
import TermsBottomButton from './TermsBottomButton';

import {
  Container,
} from '../../constants';

export default function TermsScreen({ navigation }) {
  return (
    <Container>
      <TermsHeader />
      <TermsContents />
      <TermsButton />
      <TermsBottomButton navigation={navigation} />
    </Container>
  );
}
