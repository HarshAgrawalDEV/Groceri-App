import {
  Image,
  Pressable,
  ScrollView,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { router, useNavigation } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveToken,
  selectEmail,
  selectName,
  selectToken,
  selectUserId,
} from "../../redux/slices/tokenSlice";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  console.log(token);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    const isLoggedIn = () => {
      try {
        dispatch(retrieveToken);

        if (!token) {
          ToastAndroid.show("Login to view details", ToastAndroid.TOP);
          // navigation.navigate("Login");
          router.push("/Login");
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    const fetchUserDeatils = async () => {
      const result = await fetch("http://192.168.1.126:3000");
    };

    isLoggedIn();
  }, []);

  // if (!token) {
  //     ToastAndroid.show("Login to view details", ToastAndroid.TOP)
  //     navigation.navigate("Login")
  // }

  return (
    <ScrollView>
      <View className="flex-1 items-center justify-center">
        <View className="mt-20 border border-[#02B290] rounded-full p-2 ">
          <Entypo name="user" size={40} color="#02B290" />
        </View>
        <View className="my-5">
          <View className="flex flex-row justify-evenly items-center">
            <Text className=" my-2 text-center text-lg bg-white py-2 px-16 flex flex-row">
              Name: <Text className="">{userName}</Text>
            </Text>
            <Pressable className="">
              <AntDesign name="edit" size={20} color="black" />
            </Pressable>
          </View>

          <View className="flex flex-row justify-evenly items-center">
            <Text className=" my-2 text-lg bg-white py-2 px-16">
              Email: {userEmail}
            </Text>
            <Pressable className="">
              <AntDesign name="edit" size={20} color="black" />
            </Pressable>
          </View>
        </View>

        <View className="flex flex-row flex-wrap justify-evenly my-5">
          <Pressable
            //  onClick={handleTab}
            className="mx-2 border px-2 py-0.5"
          >
            <Text className="text-lg ">Orders</Text>
          </Pressable>
          <Pressable
            // onClick={handleTab}
            className="mx-2 border px-2 py-0.5"
          >
            <Text className="text-lg ">Coupons</Text>
          </Pressable>
          <Pressable className="mx-2 border px-2 py-0.5">
            <Text className="text-lg ">Coins</Text>
          </Pressable>
          <Pressable className="mx-2 border px-2 py-0.5">
            <Text className="text-lg ">Credit</Text>
          </Pressable>
        </View>

        <View className=" my-10">
          <Pressable className="border px-2 py-1 ">
            <Text className="text-lg font-medium border-b-2">Log Out</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
