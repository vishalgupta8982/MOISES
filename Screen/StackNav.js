import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Splash.js';
import NewUser from './NewUser.js';
import Login from './Login';
import Ip from './Ip.js';
import BottomTab from './BottomTab.js';
import Search2 from '../Search.js';
import Detail from './Detail.js';
 
const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search2"
        component={Search2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name="Ip"
        component={Ip}
         options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default StackNav;
