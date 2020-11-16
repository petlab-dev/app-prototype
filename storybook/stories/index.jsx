import React from 'react';

import { storiesOf } from '@storybook/react-native';
// import { linkTo } from '@storybook/addon-links';

import StorybookButton from './screens/StorybookButton';

storiesOf('Test', module).add('StorybookButton', () => <StorybookButton />);
