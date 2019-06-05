import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Button from './Button'

class Root extends React.Component {

  static navigationOptions = { header: null };
  
  render() {
    return (
      <View style={styles.MainContainer}>

        <Button
        text = {'Go to Page One'}
        navigation={this.props.navigation}
        page={"Page1"}
        />
        <Button
        text = {'Go to Page two'}
        navigation={this.props.navigation}
        page={"Page2"}
        />
        <Button
        text = {'Go to Page three'}
        navigation={this.props.navigation}
        page={"Page3"}
        />
     

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

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

})