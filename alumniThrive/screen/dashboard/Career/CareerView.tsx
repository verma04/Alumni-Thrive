import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CareerView = ({route}: any) => {
  const {id} = route.params;
  return (
    <View>
      <Text>CareerView{id}</Text>
    </View>
  );
};

export default CareerView;

const styles = StyleSheet.create({});
