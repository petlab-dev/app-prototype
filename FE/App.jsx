import Main from './src/components/screens/Main';

const STORYBOOK_START = true;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : Main;
/* eslint-enable global-require */
