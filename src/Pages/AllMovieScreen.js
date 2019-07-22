import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, Image } from "react-native";
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AllMovieScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    movies: []
  }

  render() {

    const movies = this.props.navigation.getParam("movies", []);
    console.log( movies[0].imgurl );

    return (
      <Page>
        <View style={styles.container}>
          <Navbar
            title="Browse"
            goBack={() => {
              this.props.navigation.navigate("Home");
            }}
          />
          <TextInput
            style={styles.searchBar}
            onChangeText={text => console.log(text)}
            placeholder="Search movies or theatres"
            placeholderTextColor="#868e96"
          />
          <Text style={styles.allMoviesTitle}>All Movies</Text>
          <View style={styles.allMovieContainer}>
            {
              movies.map( (item, index) => {
                return (
                  <TouchableOpacity
                    key={item._id}
                    onPress={() => {
                      this.props.navigation.navigate("Movie", {
                        movie: item
                      });
                    }}
                  >
                    <View style={styles.singleMovieContainer}>
                      <Image
                        source={{
                          uri: item.imgurl
                        }}
                        style={styles.movieImage}
                      />
                      <Text style={styles.movieName}>
                        {item.name}
                      </Text>
                      <Text style={styles.movieDuration}>
                        {item.duration + " mins"}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchBar: {
    borderRadius: 17,
    borderColor: "#c4c9df",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    padding: 10,
    fontFamily: "Montserrat Regular",
    fontSize: 13,
    fontWeight: "400"
  },
  allMoviesTitle: {
    color: "#212224",
    fontFamily: "Montserrat Regular",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: -0.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15
  },
  allMovieContainer: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 20
  },
  movieImage: {
    height: 120,
    width: 83,
    borderRadius: 5
  },
  singleMovieContainer: {
    marginRight: 10,
    marginTop: 10
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
