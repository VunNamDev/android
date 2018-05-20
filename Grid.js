import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class Grid extends Component {
  render() {
    return (
      <View style={stl.container}>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
        <View style={stl.row1}>
          <View style={stl.view1} />
          <View style={stl.view2} />
          <View style={stl.view3} />
        </View>
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  row1: {
    flex: 1 / 8,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row2: {
    flex: 1 / 8
  },
  row3: {
    flex: 1 / 8
  },
  view1: {
    flex: 1 / 4,
    backgroundColor: 'red'
  },
  view2: {
    flex: 1 / 3,
    backgroundColor: 'blue'
  },
  view3: {
    flex: 1 / 4,
    backgroundColor: 'green'
  }
});
