/* eslint-disable global-require */
import React from 'react';

import { TermsContentsContainer, TermsContentsImage, TextWrapBig, TextWrap } from '../styles';

export default function TermsContents() {
  return (
    <TermsContentsContainer>
      <TextWrapBig>서비스 이용을위해</TextWrapBig>
      <TextWrapBig>고객님의 동의가 필요합니다.</TextWrapBig>
      <TermsContentsImage source={require('../assets/Doctor.png')} />
      <TextWrap>펫닥에서는 서비스 통합 이용약관과 개인정보</TextWrap>
      <TextWrap>보호정책 및 제 3자 정보제공동의 항목을 필수로</TextWrap>
      <TextWrap>수집하고 있습니다. 아래 동의 버튼을 누르시면</TextWrap>
      <TextWrap>다음 사항들에 대해 동의하신것으로 인정됩니다.</TextWrap>
    </TermsContentsContainer>
  );
}
