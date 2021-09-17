import React from 'react'
import { View, StyleSheet } from 'react-native'

const Layout = ({ children }) => {
     return (
          <View style={styles.container}>
               {children}
          </View>
     )
}
const styles = StyleSheet.create({
     container: {
          backgroundColor: "rgba(0,0,0,.93541)",
          padding: 10,
          position: 'relative',
          flex: 1,
          alignItems: "center", 
          justifyContent: "center",
      
          
          },
})

export default Layout
