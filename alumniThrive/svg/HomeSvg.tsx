import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
const HomeSvg = ({color}) => {
  return (
    <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <Path
        d="M11 0.550781L0 10.4512H3V19.4512H10V13.4512H12V19.4512H19V10.4512H22L11 0.550781ZM11 3.24219L17 8.64258V9.45117V17.4512H14V11.4512H8V17.4512H5V8.64258L11 3.24219Z"
        fill={color}
      />
    </Svg>
  );
};

export default HomeSvg;

const styles = StyleSheet.create({});
