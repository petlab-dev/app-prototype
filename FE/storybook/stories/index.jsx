import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import Login from './Login';
import Calendar from './Calendar';

<<<<<<< HEAD
storiesOf('Login', module)
  .add('Login ID', () => <Login showApp={linkTo('Button')} />);
=======
import PreSignUp from './JyeongMu/src/screens/PreSignUp';

storiesOf('정무', module)
  .add('회왼가입 판별 페이지', () => <PreSignUp showApp={linkTo('Button')} />);
>>>>>>> 4ab9b73b1bef1ba07abc3c465c4e357b90377c75
