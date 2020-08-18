import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import LoginScreen from './screens/LoginScreen';
import MyPageScreen from './screens/MyPageScreen';

import AuthCheckScreen from './screens/AuthCheckScreen';
import HomeScreen from './screens/HomeScreen';
import TermsScreen from './screens/TermsScreen';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <AuthCheckScreen showApp={linkTo('Button')} />)
  .add('검색및 동물등록 병원검색', () => <HomeScreen showApp={linkTo('Button')} />)
  .add('약관 동의 페이지', () => <TermsScreen showApp={linkTo('Button')} />);
storiesOf('민혁', module)
  .add('LoginScreen', () => <LoginScreen />)
  .add('MyPageScreen', () => <MyPageScreen />);
