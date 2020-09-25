/* eslint-disable global-require */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { toggleAuth } from '../../../slice';

import IconButton from './IconButton';
import TopText from './TopText';

import {
  InputBox,
  LoginView,
  Logo,
  Header,
  InputData,
  ViewSet,
  LoginButton,
  LoginButtonText,
  SubButton,
  SubButtonText,
} from './style';

import { Container } from '../../constants';

export default function LoginScreen() {
  const dispatch = useDispatch();

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
    <Container>
      <LoginView>
        <Logo>Catmate</Logo>
        <Header>
          <TopText />
        </Header>
        <InputData>
          <InputBox
            placeholder="E-mail"
            onChangeText={(email) => setValue({ ...value, email })}
          />
          <InputBox
            secureTextEntry
            placeholder="Password"
            onChangeText={(password) => setValue({ ...value, password })}
          />
        </InputData>
        <LoginButton onPress={() => dispatch(toggleAuth())}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
        <ViewSet>
          <SubButton
            SubButton
            // onPress={() => navigation.navigate('AuthCheckScreen')}
          >
            <SubButtonText>비밀번호를 잊어버리셨나요?</SubButtonText>
          </SubButton>
        </ViewSet>
        <ViewSet>
          {platformData.map((val, key) => (
            // eslint-disable-next-line react/no-array-index-key
            <IconButton key={`icb-${key}`} value={val} />
          ))}
        </ViewSet>
      </LoginView>
    </Container>
  );
}
