import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Page from '../Components/Page';
import AuthCircles from '../Components/AuthCircles';
import API from '../Components/Config';
import axios from 'axios';
import { ToastAndroid } from "react-native";

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
      <Text style={styles.loginTitle}> Register </Text>
      <Text style={styles.loginSubtitle}>
        Signup for a new account
      </Text>
    </View>
  );
}

export default class RegisterScreen extends PureComponent {
  static navigationOptions = {
    header: null,
  };

  state = {
    name: '',
    email: '',
    password: '',
    phone: '',
    error: ''
  }

  onChangeLoginForm = (type, val) => {
    switch( type ) {
      case 'name': this.setState({ name: val }); break;
      case 'email': this.setState({ email: val }); break;
      case 'phone': this.setState({ phone: val }); break;
      case 'password': this.setState({ password: val }); break;
      default: console.log("onChangeLoginForm Error");
    }
  }

  onSubmitSignupForm = (name, email, phone, password) => {
    var emailValid = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    var mobileValid = /^[6-9]\d{9}$/;
    console.log( name );
    console.log( email );
    console.log( phone );
    console.log( password );

    if( name === "" || email === "" || phone === "" || password === "" ) {
      this.setState({ error: "Fields Cannot Be Left Blank" });
    } else
    if( emailValid.test(email) === false ) {
      this.setState({ error: "Invalid Email Address" });
    } else
    if( mobileValid.test(phone) === false ) {
      this.setState({ error: "Invalid Phone Number" });
    } else {
      var settings = {
        url: API + "/auth/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          phone: phone,
          name: name,
          email: email,
          password: password
        }
      };

      axios( settings )
      .then( (res) => {
        console.log( res.data );
        if( res.data.status == false ) {
          this.setState({ error: res.data.message });
        } else {
          this.setState({ error: "", phone: "", name: "", email: "", password: "" });
          ToastAndroid.show("User Registered", ToastAndroid.SHORT);
        }
      })
      .catch( (err) => {
        this.setState({ error: "Try Again Later" });
        console.log( err );
      });
    }
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

              <Text style={styles.loginFormLabel}>YOUR NAME</Text>
              <TextInput
                value={this.state.name}
                onChangeText={text => this.onChangeLoginForm('name', text)}
                style={styles.loginFormInput}
              />

              <Text style={styles.loginFormLabel}>EMAIL ID</Text>
              <TextInput
                value={this.state.email}
                onChangeText={text => this.onChangeLoginForm('email', text)}
                style={styles.loginFormInput}
              />

              <Text style={styles.loginFormLabel}>PHONE</Text>
              <TextInput
                value={this.state.phone}
                onChangeText={text => this.onChangeLoginForm('phone', text)}
                style={styles.loginFormInput}
              />

              <Text style={styles.loginFormLabel}>PASSWORD</Text>
              <TextInput
                secureTextEntry
                value={this.state.password}
                onChangeText={text => this.onChangeLoginForm('password', text)}
                style={styles.loginFormInput}
              />

            </View>
            <Text style={{ textAlign: 'center', color: 'red'}}>{this.state.error}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => this.onSubmitSignupForm(
                  this.state.name, this.state.email, this.state.phone, this.state.password
                )}
                style={{ width: '80%' }}
              >
                <LinearGradient
                  style={styles.loginButton}
                  start={[0.5, 0.5]}
                  colors={['#0c4ca8ff', '#3062efff']}
                >
                  <Text style={styles.loginButtonText}>Create Account</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={styles.signupContainer}>
              <Text style={styles.newHereText}>
                Already a user?
                </Text>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
                <Text style={styles.signupNowText}>Login now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Page>
    );
  }
}
