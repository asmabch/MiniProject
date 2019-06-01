import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ElevatedView from 'react-native-elevated-view'; 
import LinearGradient from 'react-native-linear-gradient';
import Button1 from './Button1';

class Root extends React.Component {

  static navigationOptions = { header: null };
  
  render() {
    return (
      <View style={styles.MainContainer}>
       

       <ElevatedView
          elevation={5}
          style={styles.stayElevated}
        >
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Page1')} >
            <Text style={styles.TextButton}> {'Go to Page One'} </Text>
          </TouchableHighlight>

        </ElevatedView>    
      


        <ElevatedView
          elevation={5}
          style={styles.stayElevated}
        >
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Page2')} >
            <Text style={styles.TextButton}> {'Go to Page Two'} </Text>
          </TouchableHighlight>

        </ElevatedView> 

        <ElevatedView
          elevation={5}
          style={styles.stayElevated}
        >
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Page3')} >
            <Text style={styles.TextButton}> Go to Page Three </Text>
          </TouchableHighlight>

        </ElevatedView> 

      </View>
    );
  }
}

class PageOne extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>Page One</Text>
      </View>
    );
  }
}

class PageTwo extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>Page Two</Text>
      </View>
    );
  }
}

class PageThree extends React.Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>Page Three</Text>
      </View>
    );
  }
}

// 
const RootStack = createStackNavigator(
  {
    Root: Root,
    Page1: PageOne,
    Page2: PageTwo,
    Page3: PageThree,
  },
  {
    initialRouteName: 'Root',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

//style
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle:{
    fontWeight: 'bold',
  },

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

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

})