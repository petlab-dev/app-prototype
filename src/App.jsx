import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

import RootStackNavigator from './components/navigation/RootStackNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  );
}
