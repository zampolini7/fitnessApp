import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { fetchExercisesByBodyPart } from "../api/excercisesDB";
import { demoExercises } from "../constants";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "../components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";

const Excercises = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  const [excercises, setExcercises] = useState();
  console.log(item, "item33");

  useEffect(() => {
    if (item) getExercises(item.name);
  }, [item]);

  const getExercises = async (bp) => {
    const data = await fetchExercisesByBodyPart(bp);
    console.log("got data", data);
    setExcercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{
          width: widthPercentageToDP(100),
          height: heightPercentageToDP(45),
        }}
        className="rounded-b-[40px"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4  absolute rounded-full justify-center items-center pr-1"
        style={{
          height: widthPercentageToDP(8.5),
          width: widthPercentageToDP(8.5),
          marginTop: heightPercentageToDP(7),
        }}
      >
        <Ionicons name="caret-back-outline" size={20} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: heightPercentageToDP(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} Excercises
        </Text>
        <View>
          <ExercisesList data={excercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Excercises;
