import App from './src/App';

const STORYBOOK_START = true;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : App;
/* eslint-enable global-require */
