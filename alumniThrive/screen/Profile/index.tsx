import * as React from 'react';
import {Button, Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native-elements';
import BackButtonSvg from '../../svg/BackButtonSvg';
import Profile from './Profile';

const Stack = createStackNavigator();

export default function ProfileStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: '400'}}>
              Profile
            </Text>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{marginLeft: 20}}>
              <BackButtonSvg />
            </Pressable>
          ),
        }}
        name="CareerList"
        component={Profile}
      />
    </Stack.Navigator>
  );
}
