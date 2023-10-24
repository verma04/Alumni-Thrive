import {View, Text, Pressable, Dimensions} from 'react-native';
import React from 'react';
import BookMarkSvg from '../../../svg/BookMarkSvg';
import {useNavigation} from '@react-navigation/native';

const Item = ({data}) => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        width: windowWidth,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('CareerView', {
            title: data.title,
            id: data.id,
          });
        }}
        style={{
          width: '90%',
          margin: 10,
          borderRadius: 5,

          backgroundColor: '#FFF',

          shadowColor: 'rgba(24, 25, 28, 0.03)',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
        }}>
        <View style={{padding: 20}}>
          <Text>{data?.title}</Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                backgroundColor: '#E7F6EA',
                padding: 2,
                marginRight: 10,
                width: 75,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#0BA02C'}}>Part-time</Text>
            </View>
            <Text style={{color: '#767F8C'}}>Salary: {data.salary}</Text>
          </View>

          <View
            style={{
              marginTop: 20,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text>{data.companyName}</Text>
              <Text>
                {data.location},{data.city}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Item;
