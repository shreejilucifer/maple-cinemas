import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'

export default class AllMovies extends Component {

  _keyExtractor = (item, index) => item.id;

  _renderItem = ({ item }) => (
    <View key={item.id} style={styles.singleMovieContainer}>
      <Image source={{uri: item.img }} style={styles.movieImage} />
      <Text style={styles.movieName}>{item.name}</Text>
      <Text style={styles.movieDuration}>{item.duration}</Text>
    </View>
  );

  state = {
    data: [{
      id: '1',
      img: 'http://cdn.collider.com/wp-content/uploads/2018/04/ant-man-and-the-wasp-poster.jpg',
      name: 'Jurassic World',
      duration: '1h 12m'
    }, {
        id: '2',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg',
        name: 'Jurassic World',
        duration: '1h 12m'
      }, {
        id: '3',
        img: 'http://cdn.collider.com/wp-content/uploads/2018/04/ant-man-and-the-wasp-poster.jpg',
        name: 'Jurassic World',
        duration: '1h 12m'
      }, {
        id: '4',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg',
        name: 'Jurassic World',
        duration: '1h 12m'
      }, {
        id: '5',
        img: 'http://cdn.collider.com/wp-content/uploads/2018/04/ant-man-and-the-wasp-poster.jpg',
        name: 'Jurassic World',
        duration: '1h 12m'
      }, {
        id: '6',
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg',
        name: 'Jurassic World',
        duration: '1h 12m'
      }]
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.allMoviesText}>
            All Movies
        </Text>
          <TouchableOpacity>
            <Text style={styles.viewallText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.allMovieContainer}>
          <FlatList
            data={this.state.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            horizontal
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  allMoviesText: {
    color: '#212224',
    fontFamily: 'Montserrat Regular',
    fontSize: 18,
    letterSpacing: -0.5,
    fontWeight: '700',
  },
  viewallText: {
    color: '#2050d5',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
    fontWeight: '500',
  },
  allMovieContainer: {
    height: 170,
    marginLeft: 15,
    marginRight: 15,
  },
  movieImage: {
    height: 120,
    width: 83,
    borderRadius: 5,
  },
  singleMovieContainer: {
    marginRight: 10
  },
  movieName: {
    marginTop: 5,
    color: '#4a4e52',
    fontFamily: 'Montserrat Medium',
    fontSize: 10,
    fontWeight: '500',
  },
  movieDuration: {
    color: '#4a4e52',
    fontFamily: 'Montserrat Regular',
    fontSize: 10,
    fontWeight: '300',
  }
})
