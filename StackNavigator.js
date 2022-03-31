import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Button, Text, View, Alert, Image, TextInput,KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from "./src/Welcome"
import Login from './src/Login';

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
            <Stack.Screen name= "Welcome" component={Welcome} />
            <Stack.Screen name = "Login" component = {Login} /> 
        </Stack.Group>
    </Stack.Navigator>
  );
};




export default StackNavigator;