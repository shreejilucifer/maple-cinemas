import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Page from '../Components/Page';
import AuthCircles from '../Components/AuthCircles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  loginTitle: {
    marginTop: 20,
    fontSize: 24,
    color: '#212224',
    fontFamily: 'Montserrat Semi Bold',
  },
  loginSubtitle: {
    marginTop: 10,
    color: '#868e96',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
  },
  formContainer: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'column',
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  loginFormInput: {
    marginTop: 5,
    borderBottomColor: '#c4c9df',
    borderBottomWidth: 0.2,
    color: '#212224',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
  },
  loginFormLabel: {
    color: '#868e96',
    fontFamily: 'Montserrat Medium',
    fontSize: 10,
    marginTop: 30,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  loginButton: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fbfbfb',
    fontFamily: 'Montserrat Regular',
    fontSize: 13,
    fontWeight: '700',
  },
  newHereText: {
    color: '#212224',
    fontFamily: 'Montserrat Medium',
    fontSize: 13
  },
  signupNowText: {
    marginLeft: 5,
    color: '#2050d5',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
    textAlign: 'center',
  },
  signupContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  }
});

const TitleContainer = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.loginTitle}> Forget Pass </Text>
      <Text style={styles.loginSubtitle}>
        Forgot your Password ? Enter Your Mail Below
      </Text>
    </View>
  );
}

export default class ForgetPassScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
  }

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <AuthCircles />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <TitleContainer />
            <View style={styles.formContainer}>
              <Text style={styles.loginFormLabel}>EMAIL ID</Text>
              <TextInput
                value={this.state.email}
                onChangeText={text => this.onChangeLoginForm('email', text)}
                style={styles.loginFormInput}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => console.log("Hello")}
                style={{ width: '80%' }}
              >
                <LinearGradient
                  style={styles.loginButton}
                  start={[0.5, 0.5]}
                  colors={['#0c4ca8ff', '#3062efff']}
                >
                  <Text style={styles.loginButtonText}>Reset Password</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
                <Text style={styles.signupNowText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
