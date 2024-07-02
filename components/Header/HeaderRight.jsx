import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';


const HeaderRight = () => {
    return (
        <TouchableOpacity
            className='mr-5 '
            onPress={() => {
                // navigation.navigate("Cart")

            }}
        >
            <Link href='/Cart'> <AntDesign name="shoppingcart" size={24} color="black" /></Link>
        </TouchableOpacity>
    )
}

export default HeaderRight