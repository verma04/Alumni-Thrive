import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MentorShip from '..';
import MentorshipList from '../MentorShip';
import {windowHeight, windowWidth} from '../../../hooks/dimension';
import ProfileTab from './ProfileTab';
import BackButtonSvg from '../../../../svg/BackButtonSvg';

const Profile = ({route, navigation}: any) => {
  const data = route.params;
  console.log(data.data.id, 'data');

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#013Dc4"
          translucent={true}
        />
        <View style={{width: windowWidth}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#013Dc4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{
                position: 'absolute',

                left: 10,

                top: 10,

                flexDirection: 'row',

                alignItems: 'center',
              }}>
              <BackButtonSvg color="white" />
            </Pressable>
            <Image
              source={{
                uri: `https://api.alumnithrive.com/public/${data?.data?.profile_pic}`,
              }}
              style={{
                height: windowWidth / 3,
                width: windowWidth / 3,
                borderRadius: windowWidth / 6,
                margin: 30,
                objectFit: 'cover',
                borderColor: '#fb9d24',
                borderWidth: 5,
              }}
            />
            <View style={{width: '80%', marginTop: 10, marginBottom: 10}}>
              <Text
                style={{
                  marginLeft: 10,
                  fontFamily: 'Poppins',
                  fontSize: 20,
                  marginBottom: 5,
                  width: '90%',
                  textAlign: 'center',
                  color: 'white',
                }}>
                {data?.data?.first_name} {data?.data?.last_name}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  color: 'white',
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                }}>
                Batch: 2011-2013
              </Text>

              <Text
                style={{
                  marginLeft: 10,
                  color: 'white',
                  fontFamily: 'Poppins',
                  textAlign: 'center',
                }}>
                Company Name: sdssdds
              </Text>
              <Text
                style={{
                  width: '100%',
                  color: 'white',
                  textAlign: 'center',
                  marginTop: 10,
                }}>
                Journey 2.0 We, at www.pulseplaydigital.com, help brands and
                start-ups of all sizes, verticals, geographies to take advantage
                of the digital ecosystem to reach audience and generate more
                revenue. Journey 1.0 I am a Customer/Digital professional with
                20 years of leadership experience in the areas of Digital Tech
                Strategy,…
              </Text>
            </View>
          </View>
        </View>

        <ProfileTab />
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});
