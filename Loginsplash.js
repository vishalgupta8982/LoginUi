import { View, Text,Image } from 'react-native'
import React from 'react'
import Login from './Login'
export default function Loginsplash(props) {
    setTimeout(()=>{
   props.navigation.navigate("Login")
        },2000)
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black'}}>
    <Image style={{height:200,width:200}} source={require('./instagram.gif')} />
    </View>
  )
}