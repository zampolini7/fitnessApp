import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{
          width: wp(100),
          height: hp(100),
        }}
        start={{
          x: 0.5,
          y: 0,
        }}
        end={{
          x: 0.5,
          y: 0.8,
        }}
        className="justify-end flex pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{
              fontSize: hp(5),
            }}
            className="text-white font-bold tracking-wide"
          >
            Best
            <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{
              fontSize: hp(3),
            }}
            className="text-white font-bold tracking-wide"
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(400).springify()}
          className="flex items-center"
        >
          <TouchableOpacity
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex border-neutral-200 rounded-full items-center justify-center"
          >
            <Text
              style={{
                fontSize: hp(3),
              }}
              className="text-white font-bold tracking-widest"
              onPress={() => router.push("/home")}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
