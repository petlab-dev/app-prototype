import React, { useState } from 'react';
import {
  Text,
} from 'react-native';

// import { AuthContext } from '../../../contexts';

import IconButton from './IconButton';
import TopText from './TopText';
import HomeHeader from '../HomeScreen/HomeHeader';

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

export default function LoginScreen() {
  // const { toggleAuth } = useContext(AuthContext);

  const [value, setValue] = useState({
    email: '',
    password: '',
  });
  const platformData = [
    {
      platform: '카카오톡',
      link: '카카오톡연동',
      key: 1,
    },
    {
      platform: '페이스북',
      link: '페북연동',
      key: 2,
    },
    {
      platform: '네이버',
      link: '네이버연동',
      key: 3,
    },
    {
      platform: '구글',
      link: '구글연동',
      key: 4,
    },
  ];
  return (
    <LoginView>
      <HomeHeader
        text="Pet Mate"
      />
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
        <IconButton data={platformData} />
      </ViewSet>
    </LoginView>
  );
}
