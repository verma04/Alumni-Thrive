import * as React from 'react';
import {Button, Pressable, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './Dashboard';
import {Text} from 'react-native-elements';
import List from './List';
import BackButtonSvg from '../../../svg/BackButtonSvg';

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function Career() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <Text
              style={{fontFamily: 'Poppins', fontSize: 18, fontWeight: '400'}}>
              Career
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
        component={List}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Career',
        }}
        name="Notifications"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
}
