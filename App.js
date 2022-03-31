import * as React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Button, Text, View, Alert, Image, TextInput,KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './StackNavigator';


export default function App(){
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

