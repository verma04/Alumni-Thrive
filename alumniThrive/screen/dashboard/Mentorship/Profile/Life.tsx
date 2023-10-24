import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../../hooks/dimension';

const Life = () => {
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
          Life
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          Family/relatives associated with: Siblings
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          languages: Sanskrit
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          Hobbies/Passion: Golfing
        </Text>
      </View>
    </View>
  );
};

export default Life;

const styles = StyleSheet.create({});
