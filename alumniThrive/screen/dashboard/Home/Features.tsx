import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import ComSvg from '../../../svg/ComSvg';
import GivingSvg from '../../../svg/GivingSvg';
import MentorSvg from '../../../svg/MentorSvg';
import SpoLightSvg from '../../../svg/SpoLight';
import CommunitySvg from '../../../svg/CommunitySvg';
import MediaSvg from '../../../svg/MediaSvg';

const Features = () => {
  const data = [
    {
      name: 'Community',
      svg: <ComSvg />,
    },
    {
      name: 'Giving',
      svg: <GivingSvg />,
    },
    {
      name: 'Mentorship',
      svg: <MentorSvg />,
    },
    {
      name: 'Spotlight',
      svg: <SpoLightSvg />,
    },
    {
      name: 'Communication',
      svg: <CommunitySvg />,
    },
    {
      name: 'Media',
      svg: <MediaSvg />,
    },
  ];
  const width = Dimensions.get('window').width / 4;
  return (
    <View
      style={{
        width: '90%',

        marginTop: 30,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
      }}>
      {data.map(set => (
        <View style={{}}>
          <Pressable
            style={{
              width: width,
              borderRadius: 5,
              height: width,
              backgroundColor: '#EEF4FB',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: 'rgba(24, 25, 28, 0.03)',
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 1,
                width: 1,
              },
            }}>
            {set.svg}
          </Pressable>
          <View style={{width: width}}>
            <Text
              style={{
                color: '#4253F0',
                textAlign: 'center',
                marginTop: 10,
                fontSize: 12,
              }}>
              {set.name}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Features;

const styles = StyleSheet.create({});
