import React from "react";
import { useRouter } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { widthPercentageToDP } from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExercisesList = ({ data }) => {
  const router = useRouter();
  return (
    <View className="">
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
          paddingTop: 20,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyExerciseCard router={router} item={item} index={index} />
        )}
      />
    </View>
  );
};

const BodyExerciseCard = ({ item, router, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(4000)
        .delay(index + 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        className="py-3 flex space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={item.gifUrl}
            contentFit="cover"
            style={{
              width: widthPercentageToDP(44),
              height: widthPercentageToDP(52),
            }}
            className="rounded-[25px]"
          />
        </View>
        <Text className="text-neutral-700 font-semibold ml-1 tracking-wide">
          {item?.name.lenght ? 21 && item.name.slice(0, 21) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExercisesList;
