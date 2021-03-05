/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StatusBar, View} from 'react-native';
import Routes from './src/routes';
import Store from './src/store';
import {Provider} from 'mobx-react';
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Provider Store={Store}>
          <Routes />
        </Provider>
      </View>
    );
  }
}
