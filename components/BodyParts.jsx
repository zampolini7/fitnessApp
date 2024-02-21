import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyParts = () => {
  const router = useRouter();
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: wp(3) }}
        className="font-semibold text-neutral-700"
      >
        Excercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
          paddingTop: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} item={item} index={index} />
        )}
      />
    </View>
  );
};

const BodyPartCard = ({ item, router, index }) => {
  return (
    <Animated.View entering={FadeInDown.duration(4000).delay(index + 200)}>
      <TouchableOpacity
        className="flex justify-end p-4 mb-4"
        style={{
          height: wp(52),
          width: wp(44),
        }}
        onPress={() => router.push({ pathname: "/excercises", params: item })}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            height: wp(52),
            width: wp(44),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{
            height: hp(15),
            width: wp(44),
          }}
          start={{
            x: 0.5,
            y: 0,
          }}
          end={{
            x: 0.5,
            y: 1,
          }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          style={{ fontSize: 2.3 }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BodyParts;
