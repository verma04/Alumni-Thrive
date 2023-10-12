import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const BellSvg = () => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M18.7501 10.21V9.505C18.7501 5.636 15.7261 2.5 12.0001 2.5C8.27406 2.5 5.25006 5.636 5.25006 9.505V10.21C5.25127 11.0516 5.01111 11.8758 4.55806 12.585L3.45006 14.31C2.43906 15.885 3.21106 18.026 4.97006 18.524C9.56617 19.827 14.434 19.827 19.0301 18.524C20.7891 18.026 21.5611 15.885 20.5501 14.311L19.4421 12.586C18.9887 11.8769 18.7482 11.0527 18.7491 10.211L18.7501 10.21Z"
        stroke="#4253F0"
        stroke-width="1.5"
      />
      <Path
        d="M7.5 19.5C8.155 21.248 9.922 22.5 12 22.5C14.078 22.5 15.845 21.248 16.5 19.5"
        stroke="#4253F0"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Circle cx="17" cy="5" r="2" fill="#DC0C0C" />
    </Svg>
  );
};

export default BellSvg;
