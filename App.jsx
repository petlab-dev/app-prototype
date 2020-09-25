import Index from './src/Index';

const STORYBOOK_START = false;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : Index;
/* eslint-enable global-require */
