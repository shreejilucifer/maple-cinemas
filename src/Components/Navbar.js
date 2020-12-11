import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import usericon from '../../assets/boy.png';

const Navbar = ({ title, goBack }) => {
	const [location, setLocation] = React.useState(null);
	const [city, setCity] = React.useState(null);
	const [errorMessage, setErrorMessage] = React.useState(null);

	React.useEffect(() => {
		_getLocationAsync();
	}, []);

	const _getLocationAsync = async () => {
		let location = await Location.getCurrentPositionAsync({});

		let more = await Location.reverseGeocodeAsync({
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
		});
		setLocation(location);
		setCity(more[0].city);
	};
	return (
		<View style={styles.container}>
			<View style={styles.leftContainer}>
				<Text style={styles.nowShowing}>{title}</Text>
				{city === null ? (
					<Text style={styles.locationText}>...</Text>
				) : (
					<Text style={styles.locationText}>Movies in {city}</Text>
				)}
			</View>
			<View style={styles.rightContainer}>
				<TouchableOpacity
					onPress={() => {
						goBack();
					}}
				>
					<Image source={usericon} style={styles.propic} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginTop: 25,
		justifyContent: 'space-between',
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 15,
		paddingBottom: 15,
	},
	leftContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
	},
	nowShowing: {
		color: '#212224',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 24,
		letterSpacing: -1,
	},
	locationText: {
		color: '#868e96',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 13,
	},
	rightContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	propic: {
		width: 50,
		height: 50,
	},
});

export default Navbar;
