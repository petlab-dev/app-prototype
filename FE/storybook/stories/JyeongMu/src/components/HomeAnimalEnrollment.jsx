/* eslint-disable global-require */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  AnimalEnrollmentContainter,
  EnrollmentTextContainer,
  AnimalEnrollImage,
  TextWrapForEnroll,
} from '../styles';

export default function HomeAnimalEnrollment() {
  return (
    <AnimalEnrollmentContainter>
      <TouchableOpacity>
        <AnimalEnrollImage source={require('../assets/PetEnroll.png')} />
      </TouchableOpacity>
      <EnrollmentTextContainer>
        <TextWrapForEnroll>반려동물 등록</TextWrapForEnroll>
        <TextWrapForEnroll>보호자님의 사랑스러운</TextWrapForEnroll>
        <TextWrapForEnroll>반려동물을 등록해주세요!</TextWrapForEnroll>
      </EnrollmentTextContainer>
    </AnimalEnrollmentContainter>
  );
}
