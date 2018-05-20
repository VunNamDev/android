import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
export default class BT extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.top}>
          <View style={[style.top_items, style.color_blue, style.align_and_just]}>
            <Text style={{ color: 'white' }}>Top{'\n'} Left</Text>
          </View>
          <View style={[style.top_items, style.color_red, style.align_and_just]}>
            <Text style={{ color: 'white' }}>Top{'\n'}Middle</Text>
          </View>
          <View style={[style.top_items, style.color_blue, style.align_and_just]}>
            <Text style={{ color: 'white' }}>Top{'\n'}Right</Text>
          </View>
        </View>
        {/* 2 */}
        <View style={[style.top, style.black]}>
          <View />
        </View>
        {/* 3 */}
        <View style={style.center}>
          <View style={style.center_row}>
            <View style={[style.center_items_top_center, style.align_and_just]}>
              <Text style={{ color: 'white' }}>Center</Text>
            </View>
          </View>
          <View style={[style.center_row]}>
            <View style={style.left}>
              <View style={[style.center_items, style.align_and_just]}>
                <Text style={{ color: 'white' }}>Left</Text>
              </View>
            </View>
            <View style={style.right}>
              <View style={[style.center_items, style.align_and_just]}>
                <Text style={{ color: 'white' }}>Right</Text>
              </View>
            </View>
          </View>
          <View>
            <Text />
          </View>
        </View>
        <View style={style.center}>
          <View style={style.bottom_row} />
          <View style={[style.bottom_row, style.color_blue, style.align_and_just]}>
            <Text style={{ color: 'white' }}>Bottom of Screen</Text>
          </View>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  top: {
    flex: 1 / 4,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  center: {
    flex: 1 / 4,
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  top_items: {
    flex: 1 / 4,
    backgroundColor: '#67f7d1'
  },
  black: {},
  center_row: {
    flex: 1 / 2,

    flexDirection: 'row',
    justifyContent: 'center'
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1 / 2
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1 / 2
  },
  center_items_top_center: {
    flex: 1 / 4,
    backgroundColor: '#7192ed'
  },
  center_items: {
    flex: 1 / 2,
    backgroundColor: '#ed9071'
  },
  bottom_row: {
    flex: 1 / 2
  },

  color_blue: {
    backgroundColor: '#7192ed'
  },
  color_red: {
    backgroundColor: '#ed9071'
  },

  align_and_just: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
