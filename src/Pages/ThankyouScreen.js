import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Page from '../Components/Page';

export default class ThankyouScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Text>Thank You ! 😊</Text>
          <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Home');
          }}>
            <Text>Go Home</Text>
          </TouchableOpacity>
        </View>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
