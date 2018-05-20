import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class Bai1 extends Component {
  render() {
    return (
      <View style={stl.container}>
        <View style={stl.view1} />
        <View style={stl.view2} />
        <View style={stl.view3} />
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 1
  },
  view1: {
    backgroundColor: 'blue',
    flex: 1 / 3
  },
  view2: {
    backgroundColor: 'red',
    flex: 1 / 3
  },
  view3: {
    backgroundColor: 'green',
    flex: 1 / 3
  }
});
