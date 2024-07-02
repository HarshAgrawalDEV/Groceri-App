import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Banner = () => {
    const [bannerSearchText, setBannerSearchText] = useState('');
    const navigation = useNavigation();

    const handleSearch = () => {
        navigation.navigate('Products', { search: bannerSearchText });
    };

    return (
        <ImageBackground
            source={{
                uri: 'https://borobazar.vercel.app/assets/images/hero/banner-mobile-4.png',
            }}


            className=' h-[40vh] bg-top'
        >
            <View className="flex flex-col justify-center items-center py-5 mt-16">
                <Text className="text-green-800 text-2xl font-bold text-center mb-4 mx-2">
                    Healthy vegetable that you deserve to eat fresh
                </Text>
                <Text className="text-gray-700 text-base text-center px-4 mb-6 mx-2">
                    We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.
                </Text>
                {/* <View className="flex-row items-center w-80 mb-6">
                    <TextInput
                        style={{
                            flex: 1,
                            height: 40,
                            borderColor: '#333',
                            borderWidth: 1,
                            borderRadius: 20,
                            paddingHorizontal: 16,
                            marginRight: 10,
                            outline: 'none',
                        }}
                        placeholder="What are you looking..."
                        onChangeText={(text) => setBannerSearchText(text)}
                        value={bannerSearchText}
                        className="border-gray-300 focus:border-green-500 px-4 py-2 rounded-full w-full"
                    />
                    <TouchableOpacity
                        style={{

                            width: 40,
                            height: 40,
                            backgroundColor: '#0b4635',
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={handleSearch}
                        className="bg-green-600 rounded-full flex items-center justify-center"
                    >
                        <Text style={{ color: '#fff', fontSize: 18 }} className="text-white">Search</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </ImageBackground>
    );
};

export default Banner;
