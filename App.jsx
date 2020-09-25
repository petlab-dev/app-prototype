import App from './src/App';

const STORYBOOK_START = false;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : App;
/* eslint-enable global-require */
