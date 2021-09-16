import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import  { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import Home from './screens/HomeScreen';
import Image from './screens/ImageScreen'


const Stack = createNativeStackNavigator()

  
const App =() => {



  return (
       <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#F2CD60' },
              headerTitleStyle: { color: 'navy', fontWeight: 'bold'},
              headerTintColor: { color: 'green'}
          }}>
            
            <Stack.Screen name="Home" component={Home} options={
              ({navigation}) => ({
                  headerStyle: {
                  backgroundColor : '#F2CD60'
              },
              headerTitleStyle: {
                color: 'navy',
                fontWeight: 'bold',
              },
                headerRight: () => ( 
                   <TouchableOpacity onPress={() => navigation.navigate("Image")}>
                   <Text style={{
                                              color: "#000000", 
                                              backgroundColor: 'rgba(0,0,0,.13)',
                                              padding: 2,
                                              marginRight: 20, 
                                              fontSize: 20
                                              }}>Image</Text>
                   </TouchableOpacity>
                  )
                
              })
          
            }/>
            <Stack.Screen name="Image" component={Image} options={{ 
              title: 'Image side'
            }}/>
          </Stack.Navigator>

       </NavigationContainer>
  );
}
export default App

// #EAF2E3
// #61E8E1
// #F25757
// #F2E863
// #F2CD60