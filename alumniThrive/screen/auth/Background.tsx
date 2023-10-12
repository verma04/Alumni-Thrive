import React from 'react';
import {ImageBackground} from 'react-native';
import {View} from 'react-native';

const Background = ({children}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/authBackgorund.png')}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

export default Background;
