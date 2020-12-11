import React, { PureComponent } from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

const MovieCarousel = ({ navigation, movies }) => {
	const _renderItem = ({ item, index }) => {
		return (
			<View key={index}>
				<TouchableOpacity
					activeOpacity={0.9}
					onPress={() => {
						navigation.navigate('Movie', {
							movie: item,
						});
					}}
				>
					<Image
						style={styles.movieImage}
						source={{
							uri: item.imgurl,
						}}
					/>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<View style={styles.mainContainer}>
			<Carousel
				data={movies}
				renderItem={_renderItem}
				sliderWidth={sliderWidth}
				itemWidth={itemWidth}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	movieImage: {
		borderRadius: 15,
		height: 400,
	},
	mainContainer: {
		marginTop: 15,
	},
});

export default MovieCarousel;
