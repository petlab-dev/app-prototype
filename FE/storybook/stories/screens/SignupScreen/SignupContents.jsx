import React from 'react';

import {
  TermsContentsContainer,
  TextWrapBig,
  TextWrap,
  MarginCenterView,
} from './style';

export default function SignupContents() {
  return (
    <TermsContentsContainer>
      <TextWrapBig>안녕하세요 고객님,</TextWrapBig>
      <TextWrapBig>내 손안에 수의사 펫닥입니다.</TextWrapBig>
      <MarginCenterView>
        <TextWrap>한 번의 가입으로 펫닥에서 제공되는 모든 서비스와 펫닥 제휴 동물병원 서비스를 편리하게 이용할 수 있습니다.</TextWrap>
      </MarginCenterView>
    </TermsContentsContainer>
  );
}