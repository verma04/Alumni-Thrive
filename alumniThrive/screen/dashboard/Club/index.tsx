import * as React from 'react';
import {Button, Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './Dashboard';
import {Text} from 'react-native-elements';
import List from './category';
import BackButtonSvg from '../../../svg/BackButtonSvg';
import CareerView from './CareerView';
import Group from './group';
import GroupProfile from './GroupProfile';

const Stack = createStackNavigator();

export default function Club() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: '400'}}>
              Community
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
        name="CommunityList"
        component={List}
      />
      <Stack.Screen
        options={({route}) => ({title: route?.params?.title})}
        name="Group"
        component={Group}
      />
      <Stack.Screen
        options={({route}) => ({title: route?.params?.title})}
        name="GroupProfile"
        component={GroupProfile}
      />
    </Stack.Navigator>
  );
}
