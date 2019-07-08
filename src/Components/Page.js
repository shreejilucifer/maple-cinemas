import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as Permissions from "expo-permissions";

export default class Page extends PureComponent {
  state = {
    fontLoaded: false,
    granted: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat Semi Bold': require('../../assets/Fonts/Montserrat-SemiBold.ttf'),
      'Montserrat Regular': require('../../assets/Fonts/Montserrat-Regular.ttf'),
      'Montserrat Medium': require('../../assets/Fonts/Montserrat-Medium.ttf'),
    });
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      this.setState({
        granted: true
      });
    }

    this.setState({ fontLoaded: true });
    console.log('Font Loaded');
  }

  render() {
    if (this.state.fontLoaded && this.state.granted)
      return <React.Fragment>{this.props.children}</React.Fragment>;
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}
