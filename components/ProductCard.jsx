import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, useNavigation } from 'expo-router'

const ProductCard = ({ item }) => {

    const navigation = useNavigation()


    return (
        <Link href={`/product/${item._id}`} className=' md:w-56 w-44 px-3.5 py-2.5  mx-auto my-1.5 border border-gray-200 bg-white rounded-lg border-opacity-20 m-2' >

            <View className='hover:border-b'>
                <Image source={{ uri: item.images[0] }} alt={item.name} className='h-32 w-32 mx-auto shadow-2xl' />
                {/* <View className='relative md:flex md:justify-end mt-1  bottom-5'>
                    <Pressable onClick={handleProductModal}>

                        <GrFormView className='bg-[#02B290] text-white rounded-full w-7 h-7' />
                    </Pressable>
                </View> */}
            </View>

            <View className='py-4'>
                <Text className='text-xl font-medium'><Text className='mx-0.5'>&#8377;</Text>{item.price}</Text>
                <Text className='whitespace-nowrap overflow-hidden text-ellipsis' numberOfLines={2}>{item.description.substring(0, 20, - 3) + '...'}</Text>
            </View>


        </Link >
    )
}

export default ProductCard