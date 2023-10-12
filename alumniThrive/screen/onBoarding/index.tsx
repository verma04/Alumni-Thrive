import {Image} from 'react-native';
import React from 'react';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}: any) => (
  <Onboarding
    onDone={() => navigation.navigate('StartScreen')}
    onSkip={() => navigation.navigate('StartScreen')}
    titleStyles={{textAlign: 'left', fontFamily: 'Poppins', fontWeight: '700'}}
    bottomBarColor="transparent"
    pages={[
      {
        backgroundColor: '#FF97CF',
        image: (
          <Image
            source={require('../../assets/images/OnBoarding/Slide1.png')}
          />
        ),
        title: 'Connected',
        subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      },
      {
        backgroundColor: '#FFE790',
        image: (
          <Image
            source={require('../../assets/images/OnBoarding/Slide2.png')}
          />
        ),
        title: 'Connected',
        subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      },
      {
        backgroundColor: '#C5A3EF',
        image: (
          <Image
            source={require('../../assets/images/OnBoarding/Slide3.png')}
          />
        ),
        title: 'Connected',
        subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      },
      {
        backgroundColor: '#9AFBFB',
        image: (
          <Image
            source={require('../../assets/images/OnBoarding/Slide4.png')}
          />
        ),
        title: 'Connected',
        subtitle: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      },
    ]}
  />
);

export default OnBoarding;
