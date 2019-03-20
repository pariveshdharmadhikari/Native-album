/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} > 
        <Header headerTitle={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

