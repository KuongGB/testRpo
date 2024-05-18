import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const item = {
  url: String,
};
const banner = [
  {url: 'https://picsum.photos/200/300?random=1'},
  {url: 'https://picsum.photos/200/300?random=3'},
  {url: 'https://picsum.photos/200/300?random=5'},
];
const HEIGHT = Dimensions.get('window').height;
const Test: React.FC = () => {
  const renderItem = ({item}: {item: {url: string}}) => (
    <Image source={{uri: item.url}} style={styles.image} />
  );
  const {width: screenWidth} = Dimensions.get('window');
  return (
    <ScrollView>
      <View>
        <Text>hihi</Text>
        <View>
          <Text>haha</Text>
        </View>
      </View>
      <Carousel
        data={banner}
        renderItem={renderItem}
        sliderWidth={screenWidth * 0.91}
        itemWidth={screenWidth * 0.91}
        autoplayInterval={2500}
        loop={true}
      />
      <Text>hi</Text>
    </ScrollView>
  );
};

export default Test;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: HEIGHT / 5,
    borderRadius: 25,
  },
});
