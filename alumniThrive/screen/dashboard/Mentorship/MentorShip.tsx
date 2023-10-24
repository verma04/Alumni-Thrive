import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Animated from 'react-native-reanimated';
import Mentor from './Mentor';
import Mentee from './Mentee';

const Tab = createMaterialTopTabNavigator();

export default function MentorshipList() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mentor" component={Mentor} />
      <Tab.Screen name="Mentee" component={Mentee} />
    </Tab.Navigator>
  );
}
