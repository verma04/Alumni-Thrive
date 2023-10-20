import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {G, Mask, Svg, Rect, Path} from 'react-native-svg';
const SpoLightSvg = () => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <Mask
        id="mask0_200_3079"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="50"
        height="50">
        <Rect width="50" height="50" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_200_3079)">
        <Path
          d="M24.9999 38.9428L12.4999 32.1479V22.0517L6.41016 18.7504L24.9999 8.6543L43.5897 18.7504V32.0517H41.5064V19.9203L37.4999 22.0517V32.1479L24.9999 38.9428ZM24.9999 26.4588L39.2307 18.7504L24.9999 11.0421L10.7692 18.7504L24.9999 26.4588ZM24.9999 36.567L35.4166 30.942V23.1976L24.9999 28.8392L14.5833 23.1976V30.942L24.9999 36.567Z"
          fill="#4253F0"
        />
      </G>
    </Svg>
  );
};

export default SpoLightSvg;

const styles = StyleSheet.create({});
