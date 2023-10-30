import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const PrivacyPolicySvg = ({color}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none">
      <Path
        d="M12.5 3.19L19.7917 6.3V11C19.7917 15.52 16.6875 19.69 12.5 20.93C8.3125 19.69 5.20833 15.52 5.20833 11V6.3L12.5 3.19ZM12.5 1L3.125 5V11C3.125 16.55 7.125 21.74 12.5 23C17.875 21.74 21.875 16.55 21.875 11V5L12.5 1ZM11.4583 7H13.5417V9H11.4583V7ZM11.4583 11H13.5417V17H11.4583V11Z"
        fill={color}
      />
    </Svg>
  );
};

export default PrivacyPolicySvg;

const styles = StyleSheet.create({});
