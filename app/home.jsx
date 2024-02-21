import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Carrousel from "../components/Carrousel";
import BodyParts from "../components/BodyParts";

const Home = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-row p-6">
        <View className="  w-3/4">
          <Text className="text-3xl text-rose-600 font-bold tracking-wider">
            Welcome
          </Text>
          <Text className="text-3xl text-gray-400 font-semibold tracking-wider">
            This are your workouts
          </Text>
        </View>
        <View className="flex items-center p-2 justify-between w-1/4">
          <Image
            className="w-10 h-10 rounded-full"
            source={require("../assets/images/welcome.png")}
          />
          <View className="bg-gray-400 p-2 rounded-full">
            <Icon name="bell" size={20} color="#900" />
          </View>
        </View>
      </View>
      <View>
        <Carrousel />
      </View>

      <View>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
