import React from 'react';

import { TouchableOpacity, View } from 'react-native';

import { TermsButtonContainer, CosentButton } from './style';

export default function TermsButton() {
  return (
    <View>
      <TermsButtonContainer>
        <TouchableOpacity onPress={() => {}}>
          <CosentButton>펫닥 통합 이용 약관, </CosentButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <CosentButton>개인정보 수집 및 이용정책,</CosentButton>
        </TouchableOpacity>
      </TermsButtonContainer>
      <TermsButtonContainer>
        <TouchableOpacity onPress={() => {}}>
          <CosentButton>제3자 정보제공동의</CosentButton>
        </TouchableOpacity>
      </TermsButtonContainer>
    </View>
  );
}
