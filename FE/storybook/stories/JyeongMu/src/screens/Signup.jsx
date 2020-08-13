import React from 'react';

import {
  Container,
} from '../styles';
import SignupHeader from '../components/SignupHeader';
import SignupContents from '../components/SignupContents';
import SignupButton from '../components/SignupButton';
import SignupInfo from '../components/SignupInfo';

export default function Signup() {
  const signupLayout = [
    {
      title: 'E-mail',
      require: '../assets/Email.png',
      textInput: '이메일을 입력해주세요.',
      key: 1,
    },
    {
      title: 'Password',
      require: '../assets/Password.png',
      textInput: '영문, 숫자 조합8자리 입니다.',
      key: 2,
    },
    {
      title: 'Password confirm',
      require: '../assets/Password.png',
      textInput: '비밀번호를 다시 입력해 주세요.',
      key: 3,
    },
    {
      title: 'Phone number',
      require: '../assets/Phone.png',
      textInput: '휴대폰 번호를 입력해 주세요.',
      key: 4,
    },
  ];

  return (
    <Container>
      <SignupHeader />
      <SignupContents />
      <SignupInfo
        signupLayout={signupLayout}
      />
      <SignupButton />
    </Container>
  );
}
