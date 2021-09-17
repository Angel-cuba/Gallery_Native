import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import  { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen'
import Tags from './libs/Tags';


const Stack = createNativeStackNavigator()

  
const App =() => {

const [search, setSearch] = useState(false)


  return (
       <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgba(0,0,0,.95)' },
              headerTitleStyle: { color: 'navy', fontWeight: 'bold'},
              headerTintColor: { color: 'green'}
          }}>
            
            <Stack.Screen name="Home" options={
              ({navigation}) => ({

              //     headerStyle: {
              //     backgroundColor : '#F2CD60'
              // },
              headerTitleStyle: {
                color: '#EAF2E3',
                fontWeight: 'bold',
              },
              headerTintColor: '#EAF2E3',
              title: 'Galley App',
              // headerTitle:  props => <Tags {...props}/>,() =>
              headerLeft:props=>  <Tags {...props}/>
              ,
                headerRight:   () => ( 
                  //               <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")}>
                  //  <Text style={{
                  //                             padding: 2,
                  //                             marginRight: 20, 
                  //                             fontSize: 20,
                  //                             color: '#EAF2E3'
                  //                             }}>
                  //                           Image
                  //                               </Text>
                  //                               {/* {(props) => <Tags {...props}/>} */}
                  //  </TouchableOpacity>
                  <Text style={{color: '#EAF2E3', fontSize: 20, fontWeight: 'bold'}}
                          onPress={ () => setSearch(!search)}
                          > 
                          {search ? 'Close' : 'Search'}
                  </Text>
                  )
                
              })
          
            }>
              { (props) => <HomeScreen {...props} search={search}/> }
            </Stack.Screen>
            <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ 
              title: 'Image side',
               headerTitleStyle: {
                color: '#EAF2E3',
                fontWeight: 'bold',
              },
              headerTintColor: '#EAF2E3'
            }}/>
          </Stack.Navigator>

       </NavigationContainer>
  );
}
const styles = StyleSheet.create({
     image : { 
          width: 50,
          height: 50
     }
})

export default App

// #EAF2E3
// #61E8E1
// #F25757
// #F2E863
// #F2CD60