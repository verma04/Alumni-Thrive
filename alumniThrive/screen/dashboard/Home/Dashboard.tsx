import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
const Dashboard = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
        <Header
          backgroundImageStyle={{}}
          barStyle="default"
          centerContainerStyle={{}}
          containerStyle={{width: '100%'}}
          leftComponent={<Text>sddsd</Text>}
          leftContainerStyle={{}}
          linearGradientProps={{}}
          placement="center"
          rightComponent={{icon: 'home', color: '#fff'}}
          rightContainerStyle={{}}
          statusBarProps={{}}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
