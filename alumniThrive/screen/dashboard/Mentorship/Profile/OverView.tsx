import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../../hooks/dimension';

const OverView = () => {
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
          About
        </Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>Name: eshant</Text>
        <Text style={{marginTop: 5, fontFamily: 'Poppins'}}>
          Email: pathaniaji2009@gmail.com
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Mobile Number: +9113216549871
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Current city: Dharamshala{' '}
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Batch year :2001-2003
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Institute name: BIMHRD Blood
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Birth Date: 2023-08-16
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Anniversary Date: 2023-08-16
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Anniversary Date: 2023-08-16
        </Text>
        <Text style={{marginTop: 10, fontFamily: 'Poppins'}}>
          Blood Group: A+
        </Text>
      </View>
    </View>
  );
};

export default OverView;

const styles = StyleSheet.create({});
