import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
  TermsBottomButtonContainer,
  BottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
} from '../styles';

export default function TermsBottomButton() {
  return (
    <TermsBottomButtonContainer>
      <RowView>
        <TouchableOpacity onPress={() => {}}>
          <BottomButtonContainer>
            <CancelButton> 취소 </CancelButton>
          </BottomButtonContainer>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <BottomButtonContainer>
            <ConsentBotton> 확인</ConsentBotton>
          </BottomButtonContainer>
        </TouchableOpacity>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
