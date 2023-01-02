import { View, Text } from 'react-native'
import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import Login from './Login';
import Loginsplash from './Loginsplash';
import NewUser from './NewUser';
const nav = createStackNavigator({
   home:{
    screen:Loginsplash,navigationOptions:{headerShown:false}
   },
   Login:{
      screen:Login,navigationOptions:{headerShown:false}
   },
   NewUser:{
      screen:NewUser,navigationOptions:{headerShown:false}
   }
 
});
  
export default createAppContainer(nav)
 