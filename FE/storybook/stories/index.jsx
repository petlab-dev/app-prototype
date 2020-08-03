import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
// import Login from './Login';
// import Second from './Second';

import PreSignUp from './JyeongMu/src/screens/PreSignUp';
import Home from './JyeongMu/src/screens/Home';
import Terms from './JyeongMu/src/screens/Terms';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <PreSignUp showApp={linkTo('Button')} />)
  .add('검색및 동물등록 병원검색', () => <Home showApp={linkTo('Button')} />)
  .add('약관 동의 페이지', () => <Terms showApp={linkTo('Button')} />);
