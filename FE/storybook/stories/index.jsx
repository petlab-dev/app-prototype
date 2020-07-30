import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { linkTo } from '@storybook/addon-links';
import Login from './Login';
import Calendar from './Calendar';

storiesOf('Login', module)
  .add('Login ID', () => <Login showApp={linkTo('Button')} />);
storiesOf('Calendar', module)
  .add('Calendar screen', () => <Calendar showApp={linkTo('Button')} />);