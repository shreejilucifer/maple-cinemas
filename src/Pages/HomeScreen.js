import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import { DoubleBounce } from 'react-native-loader';
import MovieCarousel from '../Components/MovieCarousel';
import AllMovies from '../Components/AllMovies';
import axios from 'axios';
import API from '../Components/Config';

const mydata = [
  {
    name: 'The Secret Life Of Pets 2',
    duration: '86',
    imgurl:
      'https://mediafiles.cineplex.com/Central/Film/Posters/24422_768_1024.jpg',
    releasedate: '06-07-2019',
    description:
      "THE SECRET LIFE OF PETS 2 will follow this summer's blockbuster about the lives our pets lead after we leave for work or school each day. Illumination founder and CEO Chris Meledandri and his longtime collaborator Janet Healy will produce the sequel to the comedy that had the best opening ever for an original film, animated or otherwise. THE SECRET LIFE OF PETS 2 will see the return of writer Brian Lynch (MINIONS) and once again be directed by Chris Renaud (DESPICABLE ME series, DR. SEUSS' THE LORAX).",
    type: 'IMAX',
    rating: '6'
  }
];

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    var settings = {
      url: API + '/get/movie',
      method: 'GET'
    };

    axios(settings)
      .then(res => {
        this.setState({ movies: res.data.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Navbar
            title="Now Showing"
            goBack={() => {
              this.props.navigation.navigate('Login');
            }}
          />
          {this.state.loading ? (
            <DoubleBounce size={10} color="#1CAFF6" />
          ) : (
            <>
              <MovieCarousel
                movies={this.state.movies}
                navigation={this.props.navigation}
              />
              <AllMovies
                movies={this.state.movies}
                onViewAll={() => {
                  this.props.navigation.navigate('AllMovies', {
                    movies: this.state.movies
                  });
                }}
              />
            </>
          )}
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
