import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Anticons from "react-native-vector-icons/AntDesign";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function ExerciseDetails() {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log(item, "item34");

  return (
    <View className="flex flex-1 ">
      <View className="shadow-md bg-neutral-600 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{
            width: widthPercentageToDP(100),
            height: widthPercentageToDP(100),
          }}
          className="rounded-b-[40px]"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className=" mx-2 right-0 mt-2  absolute rounded-full justify-center items-center "
        style={{
          height: widthPercentageToDP(8.5),
          width: widthPercentageToDP(8.5),
          marginTop: heightPercentageToDP(7),
        }}
      >
        <Anticons
          name="closecircle"
          size={heightPercentageToDP(4.5)}
          color="red"
        />
      </TouchableOpacity>
      <ScrollView
        className="mx-4 space-y-1 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 60 }}
      >
        <Animated.Text
          entering={FadeInDown.delay(100).duration(300)}
          style={{ fontSize: heightPercentageToDP(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(200).duration(300)}
          style={{ fontSize: heightPercentageToDP(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Equipement:{" "}
          <Text className="font-bold text-neutral-800">{item.equipment}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(300).duration(300)}
          style={{ fontSize: heightPercentageToDP(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-800">
            {item.secondaryMuscles}
          </Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(400).duration(300)}
          style={{ fontSize: heightPercentageToDP(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Target:{" "}
          <Text className="font-bold text-neutral-800">{item.target}</Text>
        </Animated.Text>
        <Animated.Text
          entering={FadeInDown.delay(450).duration(300)}
          style={{ fontSize: heightPercentageToDP(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.instructions.split(",").map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay((index + 6) * 100).duration(300)}
                key={instruction}
                style={{ fontSize: heightPercentageToDP(2) }}
                className="text-neutral-800"
              >
                {instruction}
              </Animated.Text>
            );
          })}
        </Animated.Text>
      </ScrollView>
    </View>
  );
}
