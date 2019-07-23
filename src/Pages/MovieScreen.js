import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, Picker, Alert } from 'react-native';
import Page from '../Components/Page';
import star from '../../assets/star.webp';
import duration from '../../assets/duration.webp';
import imax from '../../assets/imax.webp';
import nextbluebtn from '../../assets/nextbluebtn.webp';
import BackBtn from '../Components/BackBtn';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
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
    selectedDate: "2019-07-22",
    selectedTime: "",
    selectedShow: {}
  }

  render() {
    const movie = this.props.navigation.getParam("movie", {});

    return (
      <Page>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Image
            source={{ uri: movie.imgurl }}
            style={styles.moviePoster}
          />
          <BackBtn
            onBack={() => {
              this.props.navigation.navigate("Home");
            }}
          />
          <MovieDetails
            title={movie.name}
            stars={movie.rating}
            duration={movie.duration + " mins"}
            imax={movie.type}
            synopsis={movie.description}
          />
          {movie.schedule.map(sc => (
            <React.Fragment key={sc._id}>
              <View style={styles.datepickerContainer}>
                <Text style={styles.datepickerText}>
                  {sc.date.slice(0, 10)}
                </Text>
              </View>

              {sc.theaters.map(t => (
                <View key={t._id} style={styles.cinemaNameContainer}>
                  <Text style={styles.cinemaName}>{t.name}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      marginLeft: 10
                    }}
                  >
                    <Text>Select Show Time</Text>
                    <Picker
                      mode="dialog"
                      selectedValue={this.state.selectedTime}
                      style={styles.timePicker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ selectedTime: itemValue, selectedShow: t.shows[itemIndex] })
                      }
                    >
                      {t.shows.map(show => (
                        <Picker.Item
                          key={show._id}
                          label={show.time}
                          value={show.time}
                        />
                      ))}
                    </Picker>
                  </View>
                </View>
              ))}
            </React.Fragment>
          ))}
        </ScrollView>
        <View style={styles.nextbtn}>
          <TouchableOpacity
            onPress={() => {
              if (this.state.selectedTime === "") {
                Alert.alert("Incomplete", "Please Select Show Time");
              } else {
                this.props.navigation.navigate(
                  "MovieSeatBooking",
                  {
                    movie: movie,
                    selectedDate: this.state.selectedDate,
                    selectedTime: this.state.selectedTime,
                    selectedTheatre:
                      movie.schedule[0].theaters[0],
                    selectedShow: this.state.selectedShow
                  }
                );
              }

            }}
          >
            <Image source={nextbluebtn} />
          </TouchableOpacity>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: viewportHeight
  },
  moviePoster: {
    width: "100%",
    height: 300,
    zIndex: -1,
    position: "absolute",
    opacity: 0.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#000"
  },
  movieDetailsContainer: {
    width: "85%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: "#5880ec"
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
  },
  datepickerContainer: {
    marginTop: 20,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    borderRadius: 9,
    borderStyle: "solid",
    borderColor: "#5880ec",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  datepickerText: {
    color: "#212224",
    fontFamily: "Montserrat Semi Bold",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: -0.5,
    padding: 5
  },
  cinemaNameContainer: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%"
  },
  cinemaName: {
    color: "#5c5c5c",
    fontFamily: "Montserrat Medium",
    fontSize: 13,
    fontWeight: "500",
    marginLeft: 10,
    marginBottom: 5
  },
  timePicker: {
    width: "40%",
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 26,
    backgroundColor: "#dfdfdf",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5880ec",
    borderRadius: 10,
  },
  nextbtn: {
    position: "absolute",
    zIndex: 2,
    marginTop: viewportHeight - 100,
    right: 5
  }
});
