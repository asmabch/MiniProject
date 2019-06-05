import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';
import ElevatedView from 'react-native-elevated-view'; 

const Button = (props) => {
    return (
        <ElevatedView
        elevation={5}
        style={styles.stayElevated}
      >
        <TouchableHighlight
          onPress={() => props.navigation.navigate(props.page)} >
          <Text style={styles.TextButton}> {props.text} </Text>
        </TouchableHighlight>

      </ElevatedView>    
    )
}

const styles = StyleSheet.create({
 
  TextButton:{
    color:'#fff',
    fontSize: 20,
    // fontFamily: 'Ubuntu',
    alignItems: 'center',
    padding:10,
  },


  stayElevated: {
    margin: 10,
    backgroundColor: 'blue',
    borderRadius: 8,
  },

})
export default Button;