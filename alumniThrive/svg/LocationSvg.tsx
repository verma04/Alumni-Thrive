import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const LocationSvg = () => {
  return (
    <Svg height="20" width={'20'} viewBox="0 0 384 512">
      <Path
        fill="#013DC4"
        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
      />
    </Svg>
  );
};

export default LocationSvg;

const styles = StyleSheet.create({});
