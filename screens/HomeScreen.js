import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View} from 'react-native'

import { Input, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import Layout from './Layout'

import { getImage } from '../api/api'
import ImageList from '../components/ImageList'




const HomeScreen = ({search}) => {
          const [photos, setPhotos] = useState([])
          const [reminder, setReminder] = useState('')
          const [searchTerm, setSearchTerm] = useState('')



     const LoadImages = async (searchTerm) => {
                   const res =  await getImage(searchTerm)
                 //  console.log(res.headers['x-ratelimit-remaining'])
                 setReminder(res.headers['x-ratelimit-remaining'])
               //     console.log(res.data.photos)
                    setPhotos(res.data.photos)
               
     }

useEffect(() => {
           LoadImages()
               },[])

const handelSearch = async() => {
     await LoadImages(searchTerm)
}

     return (
          <>
          
          {search && (
          <View style={styles.section}>
                    <Input
                         placeholder="Searching"
                         inputContainerStyle={styles.inputSearch}
                         leftIconContainerStyle={styles.search}
                         style={styles.input}
                         leftIcon={{ type:'feather', name: 'search', color: 'white'}}
                         onChangeText={(value) => setSearchTerm(value)}
                    />
                    <Button 
                    title="Search" 
                    type='solid' 
                    buttonStyle={styles.button}
                    onPress={() => handelSearch()}
                    />   
               </View>
                         )}
          <Layout>
               <Text style={styles.texto}>Left: {reminder}</Text>
              <ImageList photos={photos}/>
          </Layout>
          </>
         

     )
}
const styles = StyleSheet.create({
     texto:{
          color: 'white',
          textAlign: 'right',
          width : '100%',
          paddingTop: 30
     },
     inputSearch: {
          backgroundColor: '#434343',
          borderBottomWidth: 0,
          paddingHorizontal: 4,
          color: 'white'
     },
     input: {
          color: 'white'
     },
     section: {
          backgroundColor: '#0D0D0D',
          width : '100%',
          paddingLeft: 10,
          paddingRight: 80,
          flex: 1/5,
          flexDirection: 'row',
          // alignItems: 'center'
     },
    button: {
         backgroundColor: '#233329',
         paddingBottom: 13,
    },
    search: {
         paddingLeft: 10
    }
})

export default HomeScreen
