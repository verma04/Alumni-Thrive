import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={{width: '90%', height: 200, marginTop: 30}}>
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 10,
          display: 'flex',
        }}
        source={require('../../../assets/dashBoardBanner.png')}
        resizeMode="cover">
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            padding: 5,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              marginBottom: 5,
              fontFamily: 'Poppins',
            }}>
            Welcome Alumni
          </Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Poppins',
            }}>
            Alumni Thrive Association serves as a bridge between past and
            present, fostering enduring connections and a sense of belonging
            within the alumni community.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
