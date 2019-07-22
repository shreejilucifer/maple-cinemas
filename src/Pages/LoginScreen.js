import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Page from '../Components/Page';

import icon from '../../assets/logo.webp';
import AuthCircles from '../Components/AuthCircles';
import API from '../Components/Config';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  logo: {
    marginTop: 20,
    height: 200,
    width: 200,
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
  },
  forgetPassText: {
    color: '#2050d5',
    fontFamily: 'Montserrat Medium',
    fontSize: 13,
    textAlign: 'right'
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

export default class LoginScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    email: '',
    password: '',
    error: ''
  };

  onChangeLoginForm = (choice, value) => {
    switch (choice) {
      case 'email':
        this.setState({ email: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
      default:
        console.log('Invalid Login Form Entry');
    }
  };

  storeToken = async (token) => {
      await AsyncStorage.setItem('userToken', token );
  }

  onSubmitLoginForm = (email, password, navigation) => {
    var emailValid = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    if (this.state.email === "" || this.state.password === "") {
      this.setState({
        error: "Email or Password Cannot Be Empty"
      });
    } else if( emailValid.test(this.state.email) === false ) {
      this.setState({
        error: "Email Invalid"
      });
    } else {

      var settings = {
        url: API + "/auth/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password
        }
      };

      axios( settings )
      .then( (res) => {
        if( res.data.status === false ) {
          this.setState({ error: res.data.message.error });
        } else {
          this.setState({ error: "" });
          this.storeToken(res.data.data.token);
          navigation.navigate('App');
        }
      })
      .catch( (err) => {
        this.setState({ error: "Try Again Later" });
        console.log( err );
      });


    }
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <AuthCircles />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-around"
            }}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.loginTitle}> Login </Text>
              <Text style={styles.loginSubtitle}>
                Signin to your account to continue
              </Text>
            </View>
            <View style={styles.titleContainer}>
              <Image source={icon} style={styles.logo} />
            </View>
            <View style={styles.formContainer}>
              <Text style={styles.loginFormLabel}>EMAIL ID</Text>
              <TextInput
                value={this.state.email}
                onChangeText={text => this.onChangeLoginForm("email", text)}
                style={styles.loginFormInput}
              />
              <View style={{ marginTop: 20 }} />
              <Text style={styles.loginFormLabel}>PASSWORD</Text>
              <TextInput
                value={this.state.password}
                secureTextEntry
                onChangeText={text =>
                  this.onChangeLoginForm("password", text)
                }
                style={styles.loginFormInput}
              />
              {this.state.error !== "" ? (
                <>
                  <View style={{ marginTop: 20 }} />
                  <Text style={{ textAlign: 'center', color: 'red' }}>{this.state.error}</Text>
                </>
              ) : null}

              <View style={{ marginTop: 20 }} />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ForgetPass");
                }}
              >
                <Text style={styles.forgetPassText}>Forgot password?</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.onSubmitLoginForm(this.state.email, this.state.password, this.props.navigation);
                  }}
                  style={{ width: "80%" }}
                >
                  <LinearGradient
                    style={styles.loginButton}
                    start={[0.5, 0.5]}
                    colors={["#0c4ca8ff", "#3062efff"]}
                  >
                    <Text style={styles.loginButtonText}>Login</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={styles.signupContainer}>
                <Text style={styles.newHereText}>New Here ?</Text>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("Register");
                  }}
                >
                  <Text style={styles.signupNowText}>Sign Up Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
