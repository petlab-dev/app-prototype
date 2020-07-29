import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import IconButton from './iconButton';
import TopText from './topText';
import {
  InputBox,
  LoginView,
  IconButtonStyle,
  CloseButtonView,
  Header,
  InputData,
  ViewSet,
  LoginButtonView,
  LoginButton,
  LoginButtonText,
  SubButton,
  SubButtonTextLeft,
  SubButtonTextRight,
  TopInput,
} from './emotionStyle';

export default function Login() {
  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  return (
    <LoginView>
      <CloseButtonView>
        <IconButtonStyle>
          <Text>닫기</Text>
        </IconButtonStyle>
      </CloseButtonView>
      <Header>
        <TopText />
      </Header>
      <InputData>
        <TopInput>E-mail</TopInput>
        <InputBox placeholder="E-mail" onChangeText={(email) => setValue({ ...value, email })} />
        <TopInput>Password</TopInput>
        <InputBox secureTextEntry placeholder="Password" onChangeText={(password) => setValue({ ...value, password })} />
      </InputData>
      <LoginButtonView>
        <LoginButton onPress={() => alert(value.email + "\n" +  value.password)}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </LoginButtonView>
      <ViewSet>
        <SubButton SubButton onPress={() => alert('아이디/비밀번호찾기')}>
          <SubButtonTextLeft>
            {' 아이디/비밀번호 찾기 '}
          </SubButtonTextLeft>
        </SubButton>
        <Text>|</Text>
        <SubButton onPress={() => alert('이메일로 회원가입')}>
          <SubButtonTextRight>
            {' 이메일로 회원가입 '}
          </SubButtonTextRight>
        </SubButton>
      </ViewSet>
      <ViewSet>
        <IconButton plattform="카카오" />
        <IconButton plattform="페이스북" />
        <IconButton plattform="네이버" />
        <IconButton plattform="구글" />
      </ViewSet>
    </LoginView>
  );
}
