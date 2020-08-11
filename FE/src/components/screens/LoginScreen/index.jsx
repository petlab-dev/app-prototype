import React, { useState, useContext } from 'react';
import { Text } from 'react-native';

import * as AuthSession from 'expo-auth-session';

import axios from 'axios';

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

import { NV_APP_ID, NV_APP_SECRET, STATE_STRING } from '../../../../api_constants'

export default function LoginScreen({ navigation }) {
  const { toggleAuth } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  // const [code, setCode] = useState();

  const [token, setToken] = useState();
  const [user, setUser] = useState({});

  async function handleGetAccess(code) {
    const response = await axios.get(
      `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${NV_APP_ID}&client_secret=${NV_APP_SECRET}&code=${code}&state=${STATE_STRING}`,
    );
    await console.log('access_token', response.data);

    const config = await {
      headers: { Authorization: `Bearer ${response.data.access_token}` },
    };

    const { data } = await axios.get(
      'https://openapi.naver.com/v1/nid/me',
      config,
    );
    await setToken(response.data.access_token);

    await setUser(data);

    await console.log(token, user);

    await toggleAuth();
  }

  async function handlePressAsync() {
    const redirectUrl = AuthSession.getRedirectUrl();

    const result = await AuthSession.startAsync({
      authUrl: `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NV_APP_ID}&redirect_uri=${encodeURIComponent(
        redirectUrl,
      )}&state=${STATE_STRING}`,
    });

    await handleGetAccess(result.params.code);
  }

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
      <LoginButton onPress={() => alert(`${value.email}\n${value.password}`)}>
        <LoginButtonText>로그인</LoginButtonText>
      </LoginButton>
      <ViewSet>
        <SubButton
          SubButton
          onPress={() => navigation.navigate('AuthCheckScreen')}
        >
          <SubButtonText>
            {' 아이디/비밀번호 찾기 '}
          </SubButtonText>
        </SubButton>
        <Text>|</Text>
        <SubButton onPress={() => handlePressAsync()}>
          <SubButtonText>
            {' 이메일로 회원가입 '}
          </SubButtonText>
        </SubButton>
      </ViewSet>
      <ViewSet>
        <IconButton plattform="카카오" />
        <IconButton plattform="페이스북" />
        <IconButton
          plattform="네이버"
          onPressAsync={() => handlePressAsync()}
        />
        <IconButton plattform="구글" />
      </ViewSet>
    </LoginView>
  );
}
