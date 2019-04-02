/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Header from './src/components/Header';
import Regra from './src/components/Regra';
import Cabeca from './src/components/Cabeca';


type Props = {};
export default class App extends Component<Props> {
  
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Regra />
        <View style={styles.cabecalho}>
          <Cabeca vs={0}/>
          <Cabeca vs={1}/>
          <Cabeca vs={2}/>
          <Cabeca vs={3}/>
          <Cabeca vs={4}/>
        </View>
        <Regra />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#5A00A2',

  },
  cabecalho:{
    flexDirection: 'row',
  }
  
});  
