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
          backgroundColor: "#F2CD60",
          padding: 20,
          position: 'relative',
          flex: 1,
          alignItems: "center", 
          justifyContent: "center",
          
          },
})

export default Layout
