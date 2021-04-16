import React from 'react';



import {createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import MainTab from '../stacks/MainTab';

export default () => (
    <Stack.Navigator

        initialRouterName="Preload"
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
)
