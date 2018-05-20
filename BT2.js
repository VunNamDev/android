import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class BT2 extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={[style.box]} />
        <View style={[style.box, style.color]} />
        <View style={[style.box]} />
        <View style={[style.box, style.color]}>
          <View style={[style.box_red]} />
          <View style={[style.box_red, style.red_color]} />
        </View>
        <View style={[style.box]}>
          <View style={[style.box_orange]} />
          <View style={[style.box_orange, style.red_orange]} />
        </View>
        <View style={[style.box, style.color]}>
          <View style={[style.box_orange]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_orange, style.yellow_color]} />
        </View>
        <View style={[style.box]}>
          <View style={[style.box_orange]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_orange, style.green_color]} />
        </View>
        <View style={[style.box, style.color, style.end]}>
          <View style={[style.box_blue, style.blue_color]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_red]} />
        </View>
        <View style={[style.box, style.end]}>
          <View style={[style.box_orange, style.indigo_color]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_red]} />
          <View style={[style.box_blue]} />
        </View>
        <View style={[style.box, style.color, style.end]}>
          <View style={[style.box_orange, style.violet_color]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_orange]} />
          <View style={[style.box_red]} />
          <View style={[style.box_blue]} />
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flex: 1 / 13,
    flexDirection: 'row'
  },
  box_red: {
    flex: 1 / 9
  },
  box_orange: {
    flex: 2 / 9
  },
  box_blue: {
    flex: 1.5 / 9
  },
  blue_color: {
    backgroundColor: 'blue'
  },
  red_color: {
    backgroundColor: 'red'
  },
  red_orange: {
    backgroundColor: 'orange'
  },
  yellow_color: {
    backgroundColor: 'yellow'
  },
  green_color: {
    backgroundColor: 'green'
  },
  violet_color: {
    backgroundColor: 'violet'
  },
  indigo_color: {
    backgroundColor: 'indigo'
  },
  end: {
    justifyContent: 'flex-end'
  }
});
