import React, { useState, useContext } from 'react';
import {
  Text,
} from 'react-native';

import { AuthContext } from '../../../contexts';

import IconButton from './IconButton';
import TopText from './TopText';

import {
  InputBox,
  LoginView,
  Header,
  InputData,
  ViewSet,
  LoginButton,
  LoginButtonText,
  SubButton,
  SubButtonText,
  TopInput,
} from './style';

export default function LoginScreen({ navigation }) {
  const { toggleAuth } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  return (
    <LoginView>
      <Header>
        <TopText />
      </Header>
      <InputData>
        <TopInput>E-mail</TopInput>
        <InputBox placeholder="E-mail" onChangeText={(email) => setValue({ ...value, email })} />
        <TopInput>Password</TopInput>
        <InputBox secureTextEntry placeholder="Password" onChangeText={(password) => setValue({ ...value, password })} />
      </InputData>
      <LoginButton onPress={() => alert(`${value.email}\n${value.password}`)}>
        <LoginButtonText>로그인</LoginButtonText>
      </LoginButton>
      <ViewSet>
        <SubButton SubButton onPress={() => alert('아이디/비밀번호찾기')}>
          <SubButtonText>
            {' 아이디/비밀번호 찾기 '}
          </SubButtonText>
        </SubButton>
        <Text>|</Text>
        <SubButton onPress={() => alert('이메일로 회원가입')}>
          <SubButtonText>
            {' 이메일로 회원가입 '}
          </SubButtonText>
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
