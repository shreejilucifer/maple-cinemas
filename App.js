import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AllMovieScreen from './src/Pages/AllMovieScreen';
import ForgetPassScreen from './src/Pages/ForgetPassScreen';
import HomeScreen from './src/Pages/HomeScreen';
import LoginScreen from './src/Pages/LoginScreen';
import MovieScreen from './src/Pages/MovieScreen';
import MovieSeatBookingScreen from './src/Pages/MovieSeatBookingScreen';
import RegisterScreen from './src/Pages/RegisterScreen';
import ThankyouScreen from './src/Pages/ThankyouScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login" headerMode={false}>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="ForgetPass" component={ForgetPassScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Movie" component={MovieScreen} />
				<Stack.Screen name="AllMovies" component={AllMovieScreen} />
				<Stack.Screen
					name="MovieSeatBooking"
					component={MovieSeatBookingScreen}
				/>
				<Stack.Screen name="ThankYou" component={ThankyouScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
