import RootStackNavigator from './src/components/navigation/RootStackNavigator';

const STORYBOOK_START = false;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : RootStackNavigator;
/* eslint-enable global-require */
