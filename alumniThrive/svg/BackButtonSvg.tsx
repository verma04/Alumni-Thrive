import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BackButtonSvg = () => {
  return (
    <Svg width="10" height="17" viewBox="0 0 10 17" fill="none">
      <Path
        d="M8.08333 1.00032L1 8.08366L8.08333 15.167"
        stroke="#1C1D3E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default BackButtonSvg;

const styles = StyleSheet.create({});
