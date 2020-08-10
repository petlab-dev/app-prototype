import React from 'react';

import {
  TermsBottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
  BottomButtonContainer,
} from '../styles';

export default function TermsBottomButton() {
  return (
    <TermsBottomButtonContainer>
      <RowView>
        <BottomButtonContainer onPress={() => {}}>
          <CancelButton> 취소 </CancelButton>
        </BottomButtonContainer>
        <BottomButtonContainer onPress={() => {}}>
          <ConsentBotton> 동의 </ConsentBotton>
        </BottomButtonContainer>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
