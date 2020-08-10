/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  AnimalEnrollmentContainter,
  EnrollmentTextContainer,
  AnimalEnrollImage,
  TextWrap,
  TextWrapBold,
} from '../styles';

export default function HomeAnimalEnrollment() {
  return (
    <AnimalEnrollmentContainter>
      <TouchableOpacity>
        <AnimalEnrollImage source={require('../assets/PetEnroll.png')} />
      </TouchableOpacity>
      <EnrollmentTextContainer>
        <TextWrapBold>반려동물 등록</TextWrapBold>
        <TextWrap>보호자님의 사랑스러운</TextWrap>
        <TextWrap>반려동물을 등록해주세요!</TextWrap>
      </EnrollmentTextContainer>
    </AnimalEnrollmentContainter>
  );
}
