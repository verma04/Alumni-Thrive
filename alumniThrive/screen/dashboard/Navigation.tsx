import * as React from 'react';
import {Platform, SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeSvg from '../../svg/HomeSvg';
import CategorySvg from '../../svg/CategorySvg';
import Directory from '../../svg/Directory';
import ProfileSvg from '../../svg/ProfileSvg';
import Home from './Home';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#4253F0',
        headerShown: false,
        tabBarStyle: {
          borderRadius: 25,
          height: 60,
          position: 'absolute',
          bottom: Platform.OS === 'android' ? 10 : 10,
          width: '95%',
          left: '2.5%',
        },

        tabBarIconStyle: {
          position: 'absolute',
          top: Platform.OS === 'android' ? '40%' : '40%',
        },
        tabBarLabelStyle: {
          position: 'absolute',
          bottom: Platform.OS === 'android' ? '10%' : '10%',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <HomeSvg color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <CategorySvg color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Directory color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <ProfileSvg color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Contact" component={Notifications} />
    </Drawer.Navigator>
  );
};

import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './Home/CustomDrawer';
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
