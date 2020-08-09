import React from 'react';

// import { AuthContext } from '../../../contexts';

import {
  TermsBottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
  BottomButtonContainer,
} from './style';

export default function TermsBottomButton() {
  // const { toggleAuth } = useContext(AuthContext);

  return (
    <TermsBottomButtonContainer>
      <RowView>
        <BottomButtonContainer>
          <CancelButton> 취소 </CancelButton>
        </BottomButtonContainer>
        <BottomButtonContainer>
          <ConsentBotton> 동의 </ConsentBotton>
        </BottomButtonContainer>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
