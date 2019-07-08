import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Page from '../Components/Page';
import backbtn from '../../assets/backbtn.webp';
import star from '../../assets/star.webp';
import duration from '../../assets/duration.webp';
import imax from '../../assets/imax.webp';

const BackBtn = (props) => (
    <View style={styles.backbtnContainer}>
      <TouchableOpacity onPress={props.onBack}>
        <Image source={backbtn} style={styles.backbtn} />
      </TouchableOpacity>
    </View>
  );

const MovieDetails = props => (
  <View style={styles.movieDetailsContainer}>
    <View style={styles.movieDetailsTitleContainer}>
      <Text style={styles.movieDetailsTitle}>{props.title}</Text>
      <View style={styles.movieDetailsInfoContainer}>
        <View style={styles.movieDetailsInfoGroup}>
          <Image source={star} style={styles.infoImage}/>
          <Text style={styles.infoText}>{props.stars}</Text>
        </View>
        <View style={styles.movieDetailsInfoGroup}>
          <Image source={duration} style={styles.infoImage}/>
          <Text style={styles.infoText}>{props.duration}</Text>
        </View>
        <View style={styles.movieDetailsInfoGroup}>
          <Image source={imax} style={styles.infoImage}/>
          <Text style={styles.infoText}>{props.imax}</Text>
        </View>
      </View>
    </View>
    <View style={styles.line} />
    <View>
      <Text style={styles.synopisTitle}>Synopsis</Text>
      <Text style={styles.synopsis}>{props.synopsis}</Text>
      <Text style={styles.bookshow}> Book Your Show Below </Text>
    </View>
  </View>
);

export default class MovieScreen extends PureComponent {
    static navigationOptions = {
    header: null,
  };

  state = {
    img: 'http://cdn.collider.com/wp-content/uploads/2018/04/ant-man-and-the-wasp-poster.jpg'
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.img }}
            style={styles.moviePoster}
          />
          <BackBtn onBack={() => console.log("Hello")} />
          <MovieDetails
            title="Ant Man and the Wasp"
            stars="4.9"
            duration="111 mins"
            imax="Imax3D"
            synopsis="Scott Lang is grappling with the consequences of his choices as both a superhero and a father. Approached by Hope van Dyne and Dr. Hank Pym, Lang must once again don …"
          />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  backbtnContainer: {
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backbtn: {
    height: 17,
    width: 22
  },
  moviePoster: {
    width: "100%",
    height: 300,
    zIndex: -1,
    position: "absolute",
    opacity: 0.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  movieDetailsContainer: {
    width: "80%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 60,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c4c9df'
  },
  movieDetailsTitleContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  movieDetailsTitle: {
    color: "#212224",
    fontFamily: "Montserrat Semi Bold",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: -0.5
  },
  movieDetailsInfoContainer: {
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  movieDetailsInfoGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  infoImage: {
    width: 12,
    height: 12
  },
  infoText: {
    marginLeft: 5,
    color: "#868e96",
    fontFamily: "Montserrat Semi Bold",
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: -0.5
  },
  line: {
    marginTop: 15,
    width: "100%",
    height: 2,
    backgroundColor: "#c4c9df",
    opacity: 0.3
  },
  synopisTitle: {
    marginTop: 10,
    color: "#212224",
    fontFamily: "Montserrat Medium",
    fontSize: 13,
    fontWeight: "500"
  },
  synopsis: {
    marginTop: 10,
    color: "#868e96",
    fontFamily: "Montserrat Regular",
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 20
  },
  bookshow: {
    marginTop: 10,
    textAlign: "center",
    color: "#212224",
    fontFamily: "Montserrat Semi Bold",
    fontSize: 20,
    fontWeight: "600"
  }
});
