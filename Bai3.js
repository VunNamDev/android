import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class Bai3 extends Component {
  render() {
    return (
      <View style={stl.container}>
        <View style={stl.v1} />
        <View style={stl.v2} />
        <View style={stl.v3} />
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  v1: {
    flex: 1 / 4,
    backgroundColor: 'magenta'
  },
  v2: {
    flex: 1 / 4,
    backgroundColor: 'red'
  },
  v3: {
    flex: 1 / 4,
    backgroundColor: 'black'
  }
});
