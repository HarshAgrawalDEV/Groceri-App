import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import DISCOUNTBANNER from '../assets/images/banner-mobile-7.webp'

const DiscountBanner = () => {
    return (
        <View className="my-2  ">

            <ImageBackground
                // source={DISCOUNTBANNER}
                source={{
                    uri: 'https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-mobile-7.png&w=1080&q=100'
                }}

                alt="banner"
                className='bg-cover h-[45vh]'
            ></ImageBackground>
        </View>
    )
}

export default DiscountBanner