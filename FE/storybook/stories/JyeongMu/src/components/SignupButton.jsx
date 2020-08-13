import React from 'react';

import {
  TermsBottomButtonContainer,
  SignpupCancelButton,
} from '../styles';

export default function SignupButton() {
  return (
    <TermsBottomButtonContainer>
      <SignpupCancelButton
        title="본인확인"
      />
    </TermsBottomButtonContainer>
  );
}
