import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import backbtn from '../../assets/backbtn.png';

export default BackBtn = (props) => (
	<View style={styles.backbtnContainer}>
		<TouchableOpacity onPress={props.onBack}>
			<Image source={backbtn} style={styles.backbtn} />
		</TouchableOpacity>
	</View>
);

const styles = StyleSheet.create({
	backbtnContainer: {
		marginTop: 40,
		paddingLeft: 20,
		paddingRight: 20,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
	backbtn: {
		height: 17,
		width: 22,
	},
});
