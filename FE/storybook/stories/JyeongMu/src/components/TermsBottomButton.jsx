import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
  TermsBottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
} from '../styles';

export default function TermsBottomButton() {
  return (
    <TermsBottomButtonContainer>
      <RowView>
        <TouchableOpacity onPress={() => {}}>
          <CancelButton> 취소 </CancelButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <ConsentBotton> 확인</ConsentBotton>
        </TouchableOpacity>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
