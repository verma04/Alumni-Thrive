import {Text} from '@rneui/base';
import React from 'react';
import {View} from 'react-native';
import {windowWidth} from '../../hooks/dimension';

const Empty = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth,
      }}>
      <Text>No event found</Text>
    </View>
  );
};

export default Empty;
