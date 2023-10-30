import {Skeleton} from '@rneui/themed';

import React from 'react';
import {View} from 'react-native';
import {windowWidth} from '../../hooks/dimension';

const Loading = () => {
  return (
    <View
      style={{
        width: windowWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {[1].map((set, key) => (
        <Skeleton
          key={key}
          animation="wave"
          style={{marginBottom: 12}}
          width={'90%'}
          height={200}
        />
      ))}
    </View>
  );
};

export default Loading;
