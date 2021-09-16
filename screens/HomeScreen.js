import React from 'react'
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import Layout from './Layout'

const Home = ({ navigation }) => {
     return (
          <Layout>
               <Text>Home side</Text>
               {/* <TouchableOpacity onPress={() => navigation.navigate('Image')}>
                    <Text style={HomeStyles.btn}>Hola</Text>
               </TouchableOpacity>
               <Button 
               color="red"
               title= "Go to other side"
               onPress={() => navigation.navigate('Image')}
               /> */}
          </Layout>

     )
}

const HomeStyles = StyleSheet.create({
     btn: {
          backgroundColor: 'blue',
          color: 'white',
          // paddingLeft: 13,
          // paddingRight: 13,
          // paddingTop: 8,
          // paddingBottom: 8,
          padding: 6,
          textDecorationStyle: "solid",
          borderRadius: 3,
        


     }
})

export default Home
