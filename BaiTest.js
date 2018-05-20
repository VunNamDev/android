import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
export default class BaiTest extends Component {
  render() {
    return (
      <View style={stl.container}>
        <View style={stl.column1}>
          <View style={[stl.bigBox, stl.redBox]} />
        </View>

        <View style={stl.column2}>
          <View style={[stl.alignCenter, stl.centerItems]}>
            <View style={[stl.bigBox, stl.blueBox]}>
              <View style={[stl.smallBox, stl.redBox, stl.alignRedTop]} />
            </View>
          </View>

          <View style={[stl.leftItems, stl.alignCenter]}>
            <View style={stl.grayBox} />
          </View>
          <View style={[stl.leftItems, stl.justBottom, stl.alignCenter]}>
            <View style={[stl.bigBox, stl.blueBox, stl.alignLeft]}>
              <View style={[stl.smallBox, stl.redBox, stl.alignRedBottom]} />
            </View>
          </View>
        </View>

        <View style={stl.column3}>
          <View style={stl.leftItems} />
          <View style={[stl.leftItems, stl.alignLeft]}>
            <View style={[stl.bigBox, stl.blueBox]}>
              <View style={[stl.smallBox, stl.redBox]} />
            </View>
          </View>
          <View style={[stl.leftItems, stl.alignLeft, stl.justifyEnd]}>
            <View style={[stl.smallBox2, stl.blueBox]} />
          </View>
        </View>
      </View>
    );
  }
}
const stl = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  column1: {
    flex: 1 / 8,
    justifyContent: 'center'
  },
  column2: {
    flex: 5 / 8
  },
  column3: {
    flex: 2 / 8
  },
  bigBox: {
    height: 50,
    width: 50
  },
  smallBox: {
    height: 15,
    width: 15
  },
  smallBox2: {
    height: 15,
    width: 15
  },
  redBox: {
    backgroundColor: 'red'
  },
  blueBox: {
    backgroundColor: 'blue'
  },
  grayBox: {
    backgroundColor: '#ccc'
  },
  leftItems: {
    flex: 1 / 3,
    justifyContent: 'center'
  },
  centerItems: {
    flex: 1 / 3
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignLeft: {
    alignItems: 'flex-end'
  },
  alignCenter: {
    alignItems: 'center'
  },
  grayBox: {
    backgroundColor: '#ccc',
    height: 50,
    width: 200
  },
  alignRedTop: {
    top: 10,
    left: 10
  },
  justBottom: {
    justifyContent: 'flex-end'
  },
  alignRedBottom: {
    top: 10,
    right: 10
  }
});
