import * as React from 'react';
import {Button, Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native-elements';
import List from './List';
import BackButtonSvg from '../../../svg/BackButtonSvg';
import EventsList from './EventList';

const Stack = createStackNavigator();

export default function Event() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: '400'}}>
              Events
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
        component={EventsList}
      />
    </Stack.Navigator>
  );
}
