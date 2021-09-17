import React from 'react'
import { View, Text, FlatList } from 'react-native'
import CardImage from './CardImage'

const ImageList = ({photos}) => {
     const renderItem = ({item}) => <CardImage image={item}/>

     return (
          <View>
               <FlatList
                    keyExtractor={(item) => item.id} 
                    data={photos}
                    renderItem={renderItem}
                    numColumns={2}
               />
          </View>
     )
}

export default ImageList
