import React, { useContext } from 'react';

import { AuthContext } from '../../../contexts';

import {
  TermsBottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
  BottomButtonContainer,
} from './style';

export default function TermsBottomButton({ navigation }) {
  const { toggleAuth } = useContext(AuthContext);

  return (
    <TermsBottomButtonContainer>
      <RowView>
        <BottomButtonContainer onPress={() => navigation.popToTop()}>
          <CancelButton> 취소 </CancelButton>
        </BottomButtonContainer>
        <BottomButtonContainer onPress={() => toggleAuth()}>
          <ConsentBotton> 동의 </ConsentBotton>
        </BottomButtonContainer>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
