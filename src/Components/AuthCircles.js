import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import navbarCircles from '../../assets/navbar-circles.png';

const styles = StyleSheet.create({
	navbarCircles: {
		marginTop: -720,
		width: '100%',
	},
});

const AuthCircles = () => {
	return (
		<View>
			<Image source={navbarCircles} style={styles.navbarCircles} />
		</View>
	);
};

export default AuthCircles;
