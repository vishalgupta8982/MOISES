import {View, Text} from 'react-native';
import React from 'react';
import StackNav from './Screen/StackNav';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}
