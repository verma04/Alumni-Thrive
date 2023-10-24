import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../../hooks/dimension';

const Job = () => {
  return (
    <View
      style={{
        marginTop: 10,
        height: 500,
        width: windowWidth,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View style={{width: '90%', marginTop: 10}}>
        <Text style={{fontSize: 20, fontFamily: 'Poppins', fontWeight: '600'}}>
          Work Experience
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          Company name: pulseplay
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          Job title: alumni
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Start date: 2023-10-17
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Current working: Yes
        </Text>
      </View>
    </View>
  );
};

export default Job;

const styles = StyleSheet.create({});
