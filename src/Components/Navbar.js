import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as Location from 'expo-location';
import usericon from '../../assets/boy.webp';

export default class Navbar extends PureComponent {

  state = {
    location: null,
    city: null,
    errorMessage: null,
  };

 componentWillMount() {
   this._getLocationAsync();

 }

  _getLocationAsync = async () => {

    let location = await Location.getCurrentPositionAsync({});

    console.log( location.coords.latitude );
    console.log( location.coords.longitude );

     let more = await Location.reverseGeocodeAsync({
       latitude: location.coords.latitude,
       longitude: location.coords.longitude
     });
     console.log( more );
    this.setState({ location, city: more[0].city });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.nowShowing}>{this.props.title}</Text>
          {this.state.city === null ? (
            <Text style={styles.locationText}>...</Text>
          ) : (
            <Text style={styles.locationText}>Movies in {this.state.city}</Text>
          )}
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={()=>{
            this.props.goBack();
          }}>
            <Image source={usericon} style={styles.propic} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 25,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  nowShowing: {
    color: '#212224',
    fontFamily: 'Montserrat Semi Bold',
    fontSize: 24,
    letterSpacing: -1,
  },
  locationText: {
    color: '#868e96',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  propic: {
    width: 50,
    height: 50
  }
});
