import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import LoginScreen from './src/Pages/LoginScreen';
import RegisterScreen from './src/Pages/RegisterScreen';
import ForgetPassScreen from './src/Pages/ForgetPassScreen';

import HomeScreen from './src/Pages/HomeScreen';
import MovieScreen from './src/Pages/MovieScreen';
import MovieSeatBookingScreen from './src/Pages/MovieSeatBookingScreen';
import AllMovieScreen from './src/Pages/AllMovieScreen';

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgetPass: ForgetPassScreen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Movie: MovieScreen,
    MovieSeatBooking: MovieSeatBookingScreen,
    AllMovies: AllMovieScreen
  },
  {
    initialRouteName: 'MovieSeatBooking'
  });

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: 'App',
    }
  )
);
