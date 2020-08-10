import RootStackNavigator from './src/components/navigation/RootStackNavigator';

const STORYBOOK_START = true;
/* eslint-disable global-require */
export default STORYBOOK_START ? require('./storybook').default
  : RootStackNavigator;
/* eslint-enable global-require */
