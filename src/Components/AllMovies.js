import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	FlatList,
	Image,
} from 'react-native';

const AllMovies = ({ onViewAll, movies }) => {
	const [data] = React.useState([]);

	const _keyExtractor = (item) => item._id;

	const _renderItem = ({ item }) => (
		<View key={item._id} style={styles.singleMovieContainer}>
			<Image source={{ uri: item.imgurl }} style={styles.movieImage} />
			<Text style={styles.movieName}>{item.name}</Text>
			<Text style={styles.movieDuration}>{item.duration + ' mins'}</Text>
		</View>
	);

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.allMoviesText}>All Movies</Text>
				<TouchableOpacity onPress={onViewAll}>
					<Text style={styles.viewallText}>View all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.allMovieContainer}>
				<FlatList
					data={movies}
					extraData={data}
					keyExtractor={_keyExtractor}
					renderItem={_renderItem}
					horizontal
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 15,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	allMoviesText: {
		color: '#212224',
		fontFamily: 'Montserrat_400Regular',
		fontSize: 18,
		letterSpacing: -0.5,
		fontWeight: '700',
	},
	viewallText: {
		color: '#2050d5',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 13,
		fontWeight: '500',
	},
	allMovieContainer: {
		height: 170,
		marginLeft: 15,
		marginRight: 15,
	},
	movieImage: {
		height: 120,
		width: 83,
		borderRadius: 5,
	},
	singleMovieContainer: {
		marginRight: 10,
	},
	movieName: {
		marginTop: 5,
		color: '#4a4e52',
		fontFamily: 'Montserrat_500Medium',
		fontSize: 10,
		fontWeight: '500',
		width: 83,
	},
	movieDuration: {
		color: '#4a4e52',
		fontFamily: 'Montserrat_400Regular',
		fontSize: 10,
		fontWeight: '300',
	},
});

export default AllMovies;
