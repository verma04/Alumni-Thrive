import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '@rneui/themed';
import BellSvg from '../../../svg/BellSvg';
import HamburgerSvg from '../../../svg/HamburgerSvg';
import {Image} from 'react-native-elements';
const Dashboard = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
        <Header
          backgroundImageStyle={{}}
          barStyle="default"
          centerContainerStyle={{}}
          containerStyle={{width: '100%', backgroundColor: 'white'}}
          leftComponent={
            <Text>
              <Image
                source={require('../../../assets/hamBurgerLogo.png')}
                style={{width: 30, height: 30}}
              />
            </Text>
          }
          leftContainerStyle={{}}
          linearGradientProps={{}}
          placement="center"
          rightComponent={
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 10,
                flexDirection: 'row',
              }}>
              <BellSvg />
              <Pressable onPress={() => navigation.openDrawer()}>
                <HamburgerSvg />
              </Pressable>
            </View>
          }
          statusBarProps={{}}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
