import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class Bai2 extends Component {
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
    flex: 1
  },
  v1: {
    flex: 1 / 10,
    backgroundColor: 'blue'
  },
  v2: {
    flex: 8.5 / 10,
    backgroundColor: 'red'
  },
  v3: {
    flex: 0.5 / 10,
    backgroundColor: 'green'
  }
});
