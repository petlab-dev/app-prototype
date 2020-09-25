import React from 'react';

import { useDispatch } from 'react-redux';

import { toggleAuth } from '../../../slice';

import {
  TermsBottomButtonContainer,
  CancelButton,
  ConsentBotton,
  RowView,
  BottomButtonContainer,
} from './style';

export default function TermsBottomButton({ navigation }) {
  const dispatch = useDispatch();

  return (
    <TermsBottomButtonContainer>
      <RowView>
        <BottomButtonContainer onPress={() => navigation.popToTop()}>
          <CancelButton> 취소 </CancelButton>
        </BottomButtonContainer>
        <BottomButtonContainer onPress={() => dispatch(toggleAuth())}>
          <ConsentBotton> 동의 </ConsentBotton>
        </BottomButtonContainer>
      </RowView>
    </TermsBottomButtonContainer>
  );
}
