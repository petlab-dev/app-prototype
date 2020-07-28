/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import PreSignUp from './JyeongMu/src/screens/PreSignUp';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <PreSignUp showApp={linkTo('Button')} />);
