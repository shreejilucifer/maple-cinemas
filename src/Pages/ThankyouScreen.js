import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Page from '../Components/Page';
import SvgQRCode from 'react-native-qrcode-svg';

const ThankyouScreen = ({ route, navigation }) => {
	const { data } = route.params;

	return (
		<Page>
			<View style={styles.container}>
				<SvgQRCode
					value={data._id}
					size={200}
					bgColor="purple"
					fgColor="white"
				/>
				<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<Text>Your Seats: </Text>
					{data.seats.map((seat, index) => (
						<Text style={{ fontSize: 15 }} key={index}>
							{seat},
						</Text>
					))}
				</View>
				<Text style={{ marginTop: 20, fontSize: 20 }}>Thank You ! 😊</Text>
				<Text style={{ marginTop: 20, fontSize: 18 }}>
					Show the Above QR Code at The Theatre
				</Text>
				<TouchableOpacity
					style={{
						width: '80%',
						backgroundColor: '#3062efff',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 20,
					}}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Text style={{ color: '#fff', padding: 10 }}>Go Home</Text>
				</TouchableOpacity>
			</View>
		</Page>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
});

export default ThankyouScreen;
