import React, { useState, useContext } from 'react';

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

  const platformData = [
    {
      platform: 'naver',
      link: '네이버연동',
      key: 1,
      source: require('../../assets/LoginIcons/naver.png'),
    },
    {
      platform: 'kakao',
      link: '카카오톡연동',
      key: 2,
      source: require('../../assets/LoginIcons/kakao.png'),
    },
    {
      platform: 'facebook',
      link: '페북연동',
      key: 3,
      source: require('../../assets/LoginIcons/facebook.png'),
    },

    {
      platform: 'google',
      link: '구글연동',
      key: 4,
      source: require('../../assets/LoginIcons/google.png'),
    },
  ];
  return (
    <LoginView>
      <Header>
        <TopText />
      </Header>
      <InputData>
        <TopInput>E-mail</TopInput>
        <InputBox
          placeholder="E-mail"
          onChangeText={(email) => setValue({ ...value, email })}
        />
        <TopInput>Password</TopInput>
        <InputBox
          secureTextEntry
          placeholder="Password"
          onChangeText={(password) => setValue({ ...value, password })}
        />
      </InputData>
      <LoginButton onPress={toggleAuth}>
        <LoginButtonText>로그인</LoginButtonText>
      </LoginButton>
      <ViewSet>
        <SubButton
          SubButton
          onPress={() => navigation.navigate('AuthCheckScreen')}
        >
          <SubButtonText>비밀번호를 잊어버리셨나요?</SubButtonText>
        </SubButton>
      </ViewSet>
      <ViewSet>
        {platformData.map((val) => (
          <IconButton
            value={val}
          />
        ))}
      </ViewSet>
    </LoginView>
  );
}
