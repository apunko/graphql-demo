import React from 'react'
import { Component } from 'react';
import RootStack from './src/screens';
import Provider from './src/graphql';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <RootStack />
      </Provider>
    );
  }
}
