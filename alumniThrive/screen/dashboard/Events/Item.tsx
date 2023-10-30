import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import EventWishlist from '../../../svg/EventWishlist';
import {windowWidth} from '../../hooks/dimension';

import CalenderSvg from '../../../svg/CalenderSvg';
import moment from 'moment';
import LocationSvg from '../../../svg/LocationSvg';
import {Divider} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

const Item = ({data}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: windowWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <Pressable
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('ViewEvents', {
            title: data?.title,
            id: data.id,
          });
        }}
        style={{
          borderBottomColor: '#D3D3D3',
          borderBottomWidth: 1,
          paddingBottom: 10,
          width: '92%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,

          minHeight: 150,
        }}>
        <Image
          source={{
            uri: `https://api.alumnithrive.com/public/${data.eventImage}`,
          }}
          style={{height: 100, width: '27%', marginBottom: 10, borderRadius: 5}}
        />

        <View style={{width: '70%'}}>
          <Text style={{marginTop: 5, fontSize: 15, fontWeight: '600'}}>
            {data.title}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 5,
              gap: 10,
            }}>
            <CalenderSvg />

            <Text style={{marginTop: 5}}>{data.date}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 5,
              width: '100%',
            }}>
            <LocationSvg />
            <Text style={{marginTop: 5, width: '95%'}}>{data.venue}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
