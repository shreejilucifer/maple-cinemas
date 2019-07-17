import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Page from '../Components/Page';
import BackBtn from '../Components/BackBtn';
const seatMap = [];
import screen from '../../assets/screen.webp';
import legend from '../../assets/legend.webp';
import ticket from '../../assets/ticket.webp';
import nextbluebtn from '../../assets/nextbluebtn.webp';

const Data = props => (
  <View style={styles.dataContainer}>
    <View style={styles.dataTitleContainer}>
      <Text style={styles.dataTitle}>{props.title}</Text>
    </View>
    <View style={styles.dataTimeDateContainer}>
      <Text style={styles.date}>{props.date}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
    <View style={styles.dataTheatreContainer}>
      <Text style={styles.theatre}>{props.theatre}</Text>
    </View>
  </View>
);

const BottomTab = props => (
  <View style={styles.bottomtabContainer}>
    <View style={styles.bottomtabFirstContainer}>
      <Image source={ticket} />
      <Text style={styles.numTicket}>x{props.numTicket}</Text>
    </View>
    <View style={styles.bottomtabSecondContainer}>
      <Text style={styles.payable}>TOTAL PAYABLE:</Text>
      <Text style={styles.money}>${props.money}</Text>
    </View>
    <View style={styles.bottomtabThirdContainer}>
      <TouchableOpacity onPress={props.onNext}>
        <Image source={nextbluebtn} />
      </TouchableOpacity>
    </View>
  </View>
);

class Seats extends PureComponent {
  state = {
    seats: [],
    seatAvailable: [],
    seatReserved: [],
  }

  componentDidMount() {

    for( var i=1; i<100; i++) seatMap.push(i.toString());


    this.setState({
      seats: seatMap,
      seatAvailable: ["1", "2", "3", "5", "7", "25", "26"]
    });

    console.log( this.state.seats );
  }

  onClickSeat(seat) {
      if (this.state.seatReserved.indexOf(seat) > -1) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        });
        console.log(this.state.seatReserved);
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        });
        console.log(this.state.seatReserved);
      }
  }

  render() {
    return (
      <View style={styles.seatContainer}>
        {
          this.state.seats.map( (seat, index) => {
            return (
              <React.Fragment key={index}>
                {this.state.seatReserved.includes(seat) ? (
                  <TouchableOpacity
                    onPress={() => this.onClickSeat(seat)}
                    style={styles.seatTouch}
                  >
                    <View
                      style={styles.seatActualContainerReserved}
                    />
                  </TouchableOpacity>
                ) : this.state.seatAvailable.includes(seat) ? (
                  <TouchableOpacity
                    onPress={() => this.onClickSeat(seat)}
                    style={styles.seatTouch}
                  >
                    <View style={styles.seatActualContainer} />
                  </TouchableOpacity>
                ) : (
                  <View style={styles.seatTouch}>
                    <View
                      style={styles.seatActualContainerNotAvailable}
                    />
                  </View>
                )}
              </React.Fragment>
            );
          })
        }
      </View>
    );
  }
}

export default class MovieSeatBookingScreen extends PureComponent {
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
          <BackBtn
            onBack={() => {
              this.props.navigation.navigate("Movie");
            }}
          />
          <Data
            title="Ant Man and The Wasp"
            date="FRIDAY, 12"
            time="09:30 AM"
            theatre="Sathyam Cinemas: Royapettah"
          />
          <View style={styles.screenContainer}>
            <Image source={legend} />
          </View>
          <View style={styles.screenContainer}>
            <Image source={screen} />
          </View>
          <Seats />
          <BottomTab numTicket={2} money={2*10} onNext={()=>console.log("Next")}/>
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  moviePoster: {
    width: "100%",
    height: 200,
    zIndex: -1,
    position: "absolute",
    opacity: 0.5,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#000"
  },
  dataContainer: {
    backgroundColor: "#FFF",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#5880ec"
  },
  dataTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  dataTitle: {
    color: "#212224",
    fontFamily: "Montserrat Semi Bold",
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: -0.5
  },
  dataTimeDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10
  },
  date: {
    color: "#212224",
    fontFamily: "Montserrat Medium",
    fontSize: 15,
    fontWeight: "500",
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
    width: "40%",
    textAlign: "center"
  },
  time: {
    color: "#212224",
    fontFamily: "Montserrat Medium",
    fontSize: 15,
    fontWeight: "500",
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
    width: "40%",
    textAlign: "center"
  },
  dataTheatreContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 10
  },
  theatre: {
    color: "#212224",
    fontFamily: "Montserrat Medium",
    fontSize: 15,
    fontWeight: "500",
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
    textAlign: "center"
  },
  seatContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 20,
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    flexWrap: "wrap"
  },
  seatTouch: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  },
  seatActualContainer: {
    width: 19,
    height: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#ebeced"
  },
  seatActualContainerReserved: {
    width: 19,
    height: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#2050d5"
  },
  seatActualContainerNotAvailable: {
    width: 19,
    height: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#212224"
  },
  screenContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  circle: {
    width: 10,
    height: 10
  },
  bottomtabContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 30,
    borderColor: "#f0f0f1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  },
  bottomtabFirstContainer: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "#c4c9df"
  },
  numTicket: {
    color: "#868e96",
    fontFamily: "Montserrat Medium",
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 5
  },
  bottomtabSecondContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  bottomtabThirdContainer: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  payable: {
    color: "#5e636a",
    fontFamily: "Montserrat Medium",
    fontSize: 10,
    fontWeight: "500",
    letterSpacing: -0.5,
    lineHeight: 12,
    width: "30%",
    textAlign: "right"
  },
  money: {
    marginLeft: 5,
    color: "#212224",
    fontFamily: "Montserrat Medium",
    fontSize: 22,
    fontWeight: "500"
  }
});

