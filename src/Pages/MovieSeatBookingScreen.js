import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import Page from '../Components/Page';
import BackBtn from '../Components/BackBtn';

import screen from '../../assets/screen.png';
import legend from '../../assets/legend.png';
import ticket from '../../assets/ticket.png';
import nextbluebtn from '../../assets/nextbluebtn.png';
import seatMap from '../Components/SeatMap';
import { useState } from 'react';

const Data = (props) => (
	<View style={styles.dataContainer}>
		<View style={styles.dataTitleContainer}>
			<Text style={styles.dataTitle}>{props.title}</Text>
		</View>
		<View style={styles.dataTimeDateContainer}>
			<Text style={styles.date}>{props.date}</Text>
			<Text style={styles.time}>{props.time}</Text>
		</View>
		<View style={styles.dataTheatreContainer}>
			<Text style={styles.theatre}>{props.theatre}</Text>
		</View>
	</View>
);

const BottomTab = (props) => (
	<View style={styles.bottomtabContainer}>
		<View style={styles.bottomtabFirstContainer}>
			<Image source={ticket} />
			<Text style={styles.numTicket}>x{props.numTicket}</Text>
		</View>
		<View style={styles.bottomtabSecondContainer}>
			<Text style={styles.payable}>TOTAL PAYABLE:</Text>
			<Text style={styles.money}>${props.money}</Text>
		</View>
		<View style={styles.bottomtabThirdContainer}>
			<TouchableOpacity onPress={props.onNext}>
				<Image source={nextbluebtn} />
			</TouchableOpacity>
		</View>
	</View>
);

const Seats = ({ selectedTheatre, movie, selectedTime, navigation }) => {
	const [seats, setSeats] = React.useState([]);
	const [seatAvailable, setSeatAvailable] = React.useState([]);
	const [seatReserved, setSeatReserved] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(false);
		setSeats(seatMap);
	});

	const onClickSeat = (seat) => {
		if (seatReserved.indexOf(seat) > -1) {
			setSeatAvailable(seatAvailable.concat(seat));
			setSeatReserved(seatReserved.filter((res) => res != seat));
		} else {
			setSeatReserved(seatReserved.concat(seat));
			setSeatAvailable(seatAvailable.filter((res) => res != seat));
		}
	};

	const onSubmitBooking = async (
		reserved,
		selectedTheatre,
		movie,
		showTime,
		payment,
		navigation
	) => {
		navigation.navigate('ThankYou', {
			data: {
				_id: '12345',
				seats: ['56', '57'],
			},
		});
	};

	if (loading) return <ActivityIndicator />;

	return (
		<>
			<View style={styles.seatContainer}>
				{seats.map((seat, index) => {
					return (
						<React.Fragment key={index}>
							{seatReserved.includes(seat) ? (
								<TouchableOpacity
									onPress={() => onClickSeat(seat)}
									style={styles.seatTouch}
								>
									<View style={styles.seatActualContainerReserved} />
								</TouchableOpacity>
							) : seatAvailable.includes(seat) ? (
								<TouchableOpacity
									onPress={() => onClickSeat(seat)}
									style={styles.seatTouch}
								>
									<View style={styles.seatActualContainer} />
								</TouchableOpacity>
							) : (
								<View style={styles.seatTouch}>
									<View style={styles.seatActualContainerNotAvailable} />
								</View>
							)}
						</React.Fragment>
					);
				})}
			</View>
			<BottomTab
				numTicket={seatReserved.length}
				money={seatReserved.length * 10}
				onNext={() => {
					onSubmitBooking(
						seatReserved,
						selectedTheatre,
						movie,
						selectedTime,
						seatReserved.length * 10,
						navigation
					);
				}}
			/>
		</>
	);
};

const MovieSeatBookingScreen = ({ navigation, route }) => {
	const {
		movie,
		selectedDate,
		selectedTime,
		selectedTheatre,
		selectedShow,
	} = route.params;

	return (
		<Page>
			<View style={styles.container}>
				<Image source={{ uri: movie.imgurl }} style={styles.moviePoster} />
				<BackBtn
					onBack={() => {
						navigation.navigate('Movie', { movie: movie });
					}}
				/>
				<Data
					title={movie.name}
					date={selectedDate}
					time={selectedTime}
					theatre={selectedTheatre.name}
				/>
				<View style={styles.screenContainer}>
					<Image source={legend} />
				</View>
				<View style={styles.screenContainer}>
					<Image source={screen} />
				</View>
				<Seats
					movie={movie}
					selectedTheatre={selectedTheatre}
					selectedShow={selectedShow}
					selectedTime={selectedTime}
					navigation={navigation}
				/>
			</View>
		</Page>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	moviePoster: {
		width: '100%',
		height: 200,
		zIndex: -1,
		position: 'absolute',
		opacity: 0.5,
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
		backgroundColor: '#000',
	},
	dataContainer: {
		backgroundColor: '#FFF',
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		padding: 20,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 60,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#5880ec',
	},
	dataTitleContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dataTitle: {
		color: '#212224',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 24,
		fontWeight: '600',
		letterSpacing: -0.5,
	},
	dataTimeDateContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 10,
	},
	date: {
		color: '#212224',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 15,
		fontWeight: '500',
		padding: 5,
		borderWidth: 1,
		borderRadius: 7,
		width: '40%',
		textAlign: 'center',
	},
	time: {
		color: '#212224',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 15,
		fontWeight: '500',
		padding: 5,
		borderWidth: 1,
		borderRadius: 7,
		width: '40%',
		textAlign: 'center',
	},
	dataTheatreContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: 10,
	},
	theatre: {
		color: '#212224',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 15,
		fontWeight: '500',
		padding: 5,
		borderWidth: 1,
		borderRadius: 7,
		textAlign: 'center',
	},
	seatContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 20,
		justifyContent: 'space-between',
		width: '90%',
		alignSelf: 'center',
		flexWrap: 'wrap',
	},
	seatTouch: {
		width: '10%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
	},
	seatActualContainer: {
		width: 19,
		height: 16,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#ebeced',
	},
	seatActualContainerReserved: {
		width: 19,
		height: 16,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#2050d5',
	},
	seatActualContainerNotAvailable: {
		width: 19,
		height: 16,
		borderTopLeftRadius: 6,
		borderTopRightRadius: 6,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
		backgroundColor: '#212224',
	},
	screenContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15,
	},
	circle: {
		width: 10,
		height: 10,
	},
	bottomtabContainer: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 30,
		borderColor: '#f0f0f1',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10,
	},
	bottomtabFirstContainer: {
		width: '25%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRightWidth: 1,
		borderRightColor: '#c4c9df',
	},
	numTicket: {
		color: '#868e96',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 18,
		fontWeight: '500',
		marginLeft: 5,
	},
	bottomtabSecondContainer: {
		width: '50%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	bottomtabThirdContainer: {
		width: '25%',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	payable: {
		color: '#5e636a',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 10,
		fontWeight: '500',
		letterSpacing: -0.5,
		lineHeight: 12,
		width: '30%',
		textAlign: 'right',
	},
	money: {
		marginLeft: 5,
		color: '#212224',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 22,
		fontWeight: '500',
	},
});

export default MovieSeatBookingScreen;
