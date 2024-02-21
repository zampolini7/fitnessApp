import React from "react";
import { View, Text, LogBox } from "react-native";
import { Stack } from "expo-router";

const _layout = () => {
  LogBox.ignoreLogs(["Warning: Failed prop type"]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="excercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default _layout;
