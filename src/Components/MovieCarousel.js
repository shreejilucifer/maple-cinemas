import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class MovieCarousel extends PureComponent {

  state = {
    entries: [{
      img: 'http://cdn.collider.com/wp-content/uploads/2018/04/ant-man-and-the-wasp-poster.jpg'
    }, {
        img: 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SY679_.jpg'
    }]
  }
  _renderItem({ item, index }) {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={()=>console.log("Hello")}
        >
          <Image style={styles.movieImage} source={{ uri: item.img }} />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movieImage: {
    borderRadius: 15,
    height: 400,
  },
  mainContainer: {
    marginTop: 15
  }
})
