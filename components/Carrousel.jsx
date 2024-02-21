import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { images } from "../constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Text } from "react-native";
import { View } from "react-native";
import ViewPropTypes from "deprecated-react-native-prop-types";

const Carrousel = () => {
  return (
    <Carousel
      data={images}
      loop={false}
      autoplay={true}
      renderItem={CardItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={3000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const CardItem = ({ item, index }, parallaxProps) => {
  return (
    <View
      style={{
        width: wp(100) - 70,
        height: hp(25),
      }}
    >
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

export default Carrousel;
