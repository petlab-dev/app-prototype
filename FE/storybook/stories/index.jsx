/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';

import Login from './JyeongMu/src/screen/login';

storiesOf('정무', module)
  .add('로그인 페이지', () => <Login showApp={linkTo('Button')} />);
