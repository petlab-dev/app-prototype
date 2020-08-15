import React from 'react';

import {
  TermsBottomButtonContainer,
  SignupCancelButton,
} from './style';

export default function SignupButton() {
  return (
    <TermsBottomButtonContainer>
      <SignupCancelButton
        title="본인확인"
      />
    </TermsBottomButtonContainer>
  );
}