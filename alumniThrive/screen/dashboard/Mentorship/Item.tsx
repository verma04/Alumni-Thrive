import React from 'react';
import {Text, View} from 'react-native';
import {Image} from 'react-native';
import {Pressable} from 'react-native';
import {windowWidth} from '../../hooks/dimension';
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
          navigation.navigate('MentorProfile', {
            data: data,
          });
        }}
        style={{
          width: '85%',
          borderRadius: 5,
          backgroundColor: '#fff',
          shadowColor: 'rgba(24, 25, 28, 0.03)',
          shadowOpacity: 0.8,
          shadowRadius: 2,
          shadowOffset: {
            height: 1,
            width: 1,
          },
          marginBottom: 10,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                margin: 10,
                objectFit: 'cover',
                borderColor: '#fb9d24',
                borderWidth: 5,
              }}
              source={{
                uri: `https://api.alumnithrive.com/public/${data?.profile_pic}`,
              }}
            />

            <View style={{width: '70%'}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: 'Poppins',
                  fontSize: 20,
                  marginBottom: 5,
                  width: '90%',
                }}>
                {data?.first_name} {data?.lastName}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: '#6B6B6B',
                  fontFamily: 'Poppins',
                }}>
                Batch: 2011-2013
              </Text>

              <Text
                style={{
                  marginLeft: 10,
                  color: '#6B6B6B',
                  fontFamily: 'Poppins',
                }}>
                Company Name: {data?.current_company}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default Item;
