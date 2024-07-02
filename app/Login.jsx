import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { selectToken, setToken, storeToken } from "../redux/slices/tokenSlice";
import { useDispatch, useSelector } from "react-redux";
import { router, useNavigation } from "expo-router";

const Login = () => {
  const token1 = useSelector(selectToken);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // useEffect(() => {
  //     if (!token1) {
  //         console.log("No token");
  //     }
  // }, [token1])

  const [name, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { name, password, rememberme: false };

    try {
      const response = await fetch(
        "http://192.168.1.202:5000/api/Authentication/Login",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // dispatch(storeToken(data.token, data.user._id, data.user.email, data.user.name))
        // // navigation.navigate('Home')
        // setEmail("")
        // setPassword("")
        // router.push('/(tabs)')
      } else {
        throw Error("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      return error;
    }

    // if (email && password) {
    //     // Example: Alert with entered credentials
    //     Alert.alert('Logged in with:', `Email: ${email}\nPassword: ${password}`);
    // } else {
    //     Alert.alert('Error', 'Please enter both email and password.');
    // }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-4/5">
        <TextInput
          className="border-b-2 py-2 px-3 mb-4 border-gray-400"
          placeholder="Email"
          value={name}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="border-b-2 py-2 px-3 mb-4 border-gray-400"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="bg-blue-500 py-2 px-4 rounded items-center"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
