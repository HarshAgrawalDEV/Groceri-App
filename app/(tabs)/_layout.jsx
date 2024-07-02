import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="Products"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="fruit-cherries"
              size={24}
              color="black"
            />
          ),
          tabBarLabel: "Products",
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
