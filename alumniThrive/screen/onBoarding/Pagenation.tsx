import React from 'react';
import {View} from 'react-native';
import {Circle, Rect, Svg} from 'react-native-svg';

const Pagination = ({data, active}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 5,
      }}>
      {data.map((set, index) => (
        <>
          {active === index ? (
            <Svg width="24" height="6" viewBox="0 0 24 6" fill="none">
              <Rect width="24" height="6" rx="3" fill="white" />
            </Svg>
          ) : (
            <Svg width="6" height="6" viewBox="0 0 6 6" fill="none">
              <Circle
                cx="3"
                cy="3"
                r="3"
                fill="rgb(147, 172, 230)"
                fill-opacity="0.2"
              />
            </Svg>
          )}
        </>
      ))}
    </View>
  );
};

export default Pagination;
