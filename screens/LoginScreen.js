import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <View>
        <Text>This is the login screen</Text>
        <Button
          onPress={()=> this.props.navigation.navigate('HomeScreen')}
          title='Go to the HomeScreen' />
      </View>
    );
  }
}

export default LoginScreen;
