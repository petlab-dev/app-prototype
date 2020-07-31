/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import PreSignUp from './JyeongMu/src/screens/PreSignUp';
import Home from './JyeongMu/src/screens/Home';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <PreSignUp showApp={linkTo('Button')} />)
  .add('검색및 동물등록 병원검색', () => <Home showApp={linkTo('Button')} />);
