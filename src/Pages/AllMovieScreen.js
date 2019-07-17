import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TextInput, FlatList, Image } from "react-native";
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';

export default class AllMovieScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

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
              this.state.data.map( (item) => {
                return (
                  <View
                    key={item.id}
                    style={styles.singleMovieContainer}
                  >
                    <Image
                      source={{ uri: item.img }}
                      style={styles.movieImage}
                    />
                    <Text style={styles.movieName}>
                      {item.name}
                    </Text>
                    <Text style={styles.movieDuration}>
                      {item.duration}
                    </Text>
                  </View>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 20,
  },
  movieImage: {
    height: 120,
    width: 83,
    borderRadius: 5
  },
  singleMovieContainer: {
    marginRight: 10,
    marginTop: 10,
  },
  movieName: {
    marginTop: 5,
    color: "#4a4e52",
    fontFamily: "Montserrat Medium",
    fontSize: 10,
    fontWeight: "500"
  },
  movieDuration: {
    color: "#4a4e52",
    fontFamily: "Montserrat Regular",
    fontSize: 10,
    fontWeight: "300"
  }
});
