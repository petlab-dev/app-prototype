/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable global-require */
import React, { useContext } from 'react';

import { TouchableOpacity } from 'react-native';

import { AuthContext } from '../../../contexts';

import {
  AnimalEnrollmentContainter,
  EnrollmentTextContainer,
  AnimalEnrollImage,
  TextWrap,
  TextWrapBold,
} from './style';

export default function HomeAnimalEnrollment() {
  const { toggleAuth } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => toggleAuth()}>
      <AnimalEnrollmentContainter>
        <AnimalEnrollImage source={require('../../assets/PetEnroll.png')} />
        <EnrollmentTextContainer>
          <TextWrapBold>🐈 등록</TextWrapBold>
          <TextWrap>보호자님의 사랑스러운</TextWrap>
          <TextWrap>아이들을 등록해주세요!</TextWrap>
        </EnrollmentTextContainer>
      </AnimalEnrollmentContainter>
    </TouchableOpacity>
  );
}
