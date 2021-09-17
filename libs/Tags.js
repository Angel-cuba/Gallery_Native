import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Tags = () => {
     return (
               <Image
               style={styles.image}
               source={  
                     require('../assets/bar.png')
               //    
               //    {  uri: 'https://res.cloudinary.com/dqaerysgb/image/upload/v1628020661/samples/ecommerce/leather-bag-gray.jpg'}
               
               }
               />
         
     )
}
const styles = StyleSheet.create({
     image : { 
          width: 50,
          height: 40,
          tintColor: '#55efc4'
     }
})

export default Tags


