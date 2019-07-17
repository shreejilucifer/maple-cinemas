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
            this.props.navigation.navigate('Login');
          }} />
          <MovieCarousel navigation={this.props.navigation} />
          <AllMovies
            onViewAll={()=>{
              this.props.navigation.navigate('AllMovies');
            }}
          />
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
