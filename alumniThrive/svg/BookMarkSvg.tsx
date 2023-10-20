import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const BookMarkSvg = ({active}) => {
  return (
    <Svg width="22" height="23" viewBox="0 0 22 23" fill="none">
      <Path
        d="M16.243 19.7087L10.8909 16.3641L5.54004 19.7087V4.99218C5.54004 4.81476 5.61052 4.64462 5.73597 4.51917C5.86141 4.39372 6.03156 4.32324 6.20897 4.32324H15.5741C15.7515 4.32324 15.9216 4.39372 16.0471 4.51917C16.1725 4.64462 16.243 4.81476 16.243 4.99218V19.7087Z"
        stroke={active ? '#DAA520' : '#C8CCD1'}
        stroke-width="1.78382"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill={active ? '#DAA520' : 'none'}
      />
    </Svg>
  );
};

export default BookMarkSvg;

const styles = StyleSheet.create({});
