import React from 'react';
import RootStack from './src/screens';
import Provider from './src/graphql';

export default () => (
  <Provider>
    <RootStack />
  </Provider>
);
