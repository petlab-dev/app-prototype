/* eslint-disable global-require */
import React from 'react';

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

import platformInfo from '../../../__fixtures__/platformInfo';

export default function LoginScreen() {
  const dispatch = useDispatch();

  // TODO: Add onChange Logic

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
          />
          <InputBox
            secureTextEntry
            placeholder="Password"
          />
        </InputData>
        <LoginButton
          // TODO: Add logic to match from server
          onPress={() => dispatch(toggleAuth())}
        >
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
          {platformInfo.map((value) => (
            <IconButton
              key={value.key}
              platform={value.platform}
              source={value.source}
            />
          ))}
        </ViewSet>
      </LoginView>
    </Container>
  );
}
