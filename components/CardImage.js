import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const CardImage = ({ image }) => {
     // console.log(image)

     const navigation = useNavigation()
     return (
          <TouchableOpacity 
               style={cardImage.card}
               onPress={ () => navigation.navigate('ImageScreen', {image}) }
               >
               <Image
                    source={{
                         uri: image.src.portrait
                               ? image.src.portrait
                               :'https://static.thenounproject.com/png/340719-200.png',
                    }}
                    style = {{ height: 200, width: '100%', borderRadius: 5 }}
               />
          </TouchableOpacity>
     )
}
const cardImage = StyleSheet.create({
     card: { 
          display: 'flex',
          width: '48%',
          margin: 5,
          // justifyContent: 'space-around',
          backgroundColor: '#7f8c8d',
          borderWidth: 0,
          borderRadius: 5
     }
})

export default CardImage
