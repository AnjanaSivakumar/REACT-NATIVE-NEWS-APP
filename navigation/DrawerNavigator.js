import React, { useEffect, useState, } from 'react';
import { Switch } from 'react-native'
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";

import { Ionicons } from '@expo/vector-icons';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import { EventRegister } from 'react-native-event-listeners'
import theme from '../config/theme'
import themeContext from '../config/themeContext';

import TabNavigator from "./TabNavigator";


//country news
import India from '../screens/Country/India';

import US from '../screens/Country/US';


import DrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'themeChange',
      (data) => {
        setIsEnabled(data);
        console.log(data);
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <themeContext.Provider value={isEnabled === true ? theme.light : theme.dark}>
      <NavigationContainer independent={true}theme={isEnabled === true ? DarkTheme : DefaultTheme}>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={TabNavigator} options={{headerShown: false, drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="md-home"
                 size={size}
                 color={focused ? '#2E5BE3' : '#Da3349'}
              />
           ),}} />
          <Drawer.Screen name="India" component={India} options={{headerShown: true}} />
          <Drawer.Screen name="US" component={US} options={{headerShown: true}} />
          
          </Drawer.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
     
        <DrawerNavigator />
      
    </NativeBaseProvider>
  )
}
