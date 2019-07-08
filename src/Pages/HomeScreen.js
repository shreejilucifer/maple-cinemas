import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import MovieCarousel from '../Components/MovieCarousel';
import AllMovies from '../Components/AllMovies';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {}

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Navbar
          title="Now Showing"
          goBack={()=>{
            console.log("Go Back")
          }} />
          <MovieCarousel />
          <AllMovies />
        </View>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
