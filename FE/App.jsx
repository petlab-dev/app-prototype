import App from './src/App';

const STORYBOOK_START = true;

export default STORYBOOK_START ? require('./storybook').default
  : App;
