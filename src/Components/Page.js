import React from 'react';
import {
	ActivityIndicator,
	Button,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {
	useFonts,
	Montserrat_600SemiBold,
	Montserrat_400Regular,
	Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import * as Permissions from 'expo-permissions';

const Page = ({ children }) => {
	let [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
		Montserrat_400Regular,
		Montserrat_500Medium,
	});

	const [permission, askForPermission] = Permissions.usePermissions(
		Permissions.LOCATION,
		{
			ask: true,
		}
	);

	if (!permission || permission.status !== 'granted') {
		return (
			<View style={styles.pageContainer}>
				<Text>Permission is not granted</Text>
				<Button title="Grant permission" onPress={askForPermission} />
			</View>
		);
	}

	if (!fontsLoaded) {
		return (
			<View style={styles.pageContainer}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	return <View style={styles.pageContainer}>{children}</View>;
};

const styles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Page;
