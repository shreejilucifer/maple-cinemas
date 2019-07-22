import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'

export default class AllMovies extends Component {

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({ item }) => (
    <View key={item._id} style={styles.singleMovieContainer}>
      <Image
        source={{uri: item.imgurl }}
        style={styles.movieImage} />
      <Text style={styles.movieName}>{item.name}</Text>
      <Text style={styles.movieDuration}>{item.duration + " mins"}</Text>
    </View>
  );

  state = {
    data: []
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.allMoviesText}>
            All Movies
        </Text>
          <TouchableOpacity onPress={this.props.onViewAll}>
            <Text style={styles.viewallText}>View all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.allMovieContainer}>
          <FlatList
            data={this.props.movies}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  allMoviesText: {
    color: "#212224",
    fontFamily: "Montserrat Regular",
    fontSize: 18,
    letterSpacing: -0.5,
    fontWeight: "700"
  },
  viewallText: {
    color: "#2050d5",
    fontFamily: "Montserrat Medium",
    fontSize: 13,
    fontWeight: "500"
  },
  allMovieContainer: {
    height: 170,
    marginLeft: 15,
    marginRight: 15
  },
  movieImage: {
    height: 120,
    width: 83,
    borderRadius: 5
  },
  singleMovieContainer: {
    marginRight: 10
  },
  movieName: {
    marginTop: 5,
    color: "#4a4e52",
    fontFamily: "Montserrat Medium",
    fontSize: 10,
    fontWeight: "500",
    width: 83
  },
  movieDuration: {
    color: "#4a4e52",
    fontFamily: "Montserrat Regular",
    fontSize: 10,
    fontWeight: "300"
  }
});
