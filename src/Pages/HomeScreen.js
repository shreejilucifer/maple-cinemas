import React, { useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import MovieCarousel from '../Components/MovieCarousel';
import AllMovies from '../Components/AllMovies';

const mydata = [
	{
		_id: '1',
		name: 'The Secret Life Of Pets 2',
		duration: '86',
		imgurl:
			'https://mediafiles.cineplex.com/Central/Film/Posters/24422_768_1024.jpg',
		releasedate: '06-07-2019',
		description:
			"THE SECRET LIFE OF PETS 2 will follow this summer's blockbuster about the lives our pets lead after we leave for work or school each day. Illumination founder and CEO Chris Meledandri and his longtime collaborator Janet Healy will produce the sequel to the comedy that had the best opening ever for an original film, animated or otherwise. THE SECRET LIFE OF PETS 2 will see the return of writer Brian Lynch (MINIONS) and once again be directed by Chris Renaud (DESPICABLE ME series, DR. SEUSS' THE LORAX).",
		type: 'IMAX',
		rating: '6',
		schedule: [
			{
				_id: '1',
				date: 'Sat Dec 12 2020 04:20:46 GMT+0530 (India Standard Time)',
				theaters: [
					{
						_id: '1',
						name: 'Inox',
						shows: [
							{
								_id: 's1',
								time: '12 AM - 3 AM',
							},
							{
								_id: 's2',
								time: '10 PM - 2 AM',
							},
						],
					},
				],
			},
		],
	},
];

const HomeScreen = ({ navigation }) => {
	const [movies, setMovies] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	useEffect(() => {
		setMovies(mydata);
		setLoading(false);
	}, []);

	return (
		<Page>
			<View style={styles.container}>
				<Navbar
					title="Now Showing"
					goBack={() => {
						navigation.navigate('Login');
					}}
				/>
				{loading ? (
					<ActivityIndicator />
				) : (
					<React.Fragment>
						<MovieCarousel movies={movies} navigation={navigation} />
						<AllMovies
							movies={movies}
							onViewAll={() => {
								navigation.navigate('AllMovies', {
									movies: movies,
								});
							}}
						/>
					</React.Fragment>
				)}
			</View>
		</Page>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
	},
});

export default HomeScreen;
