import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import Login from './Login';
import Second from './MinHyeokSecond';

import PreSignUp from './JyeongMu/src/screens/PreSignUp';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <PreSignUp showApp={linkTo('Button')} />);

storiesOf('Login', module)
  .add('BMH1', () => <Login showApp={linkTo('Button')} />);

storiesOf('Second', module)
.add('BMH2', () => <Second showApp={linkTo('Button')} />);
