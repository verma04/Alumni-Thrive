import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {windowWidth} from '../../../hooks/dimension';
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
      }}>
      <Pressable
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('GroupProfile', {
            title: data?.name,
            id: data.id,
          });
        }}
        style={{
          width: '85%',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: 150,
            objectFit: 'cover',
          }}
          source={{
            uri: `https://api.alumnithrive.com/public/${data?.clubImage}`,
          }}
        />
        <View style={{width: '90%', marginTop: 10}}>
          <Text style={{padding: 5, fontFamily: 'Poppins', fontSize: 17}}>
            {data.name}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-start',

            width: '90%',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../../assets/eventFrame.png')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
                objectFit: 'contain',
              }}
            />

            <Text style={{marginLeft: 10}}>3 members</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({});
