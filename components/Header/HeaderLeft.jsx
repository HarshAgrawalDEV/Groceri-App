import { View, Text, Image } from 'react-native'
import React from 'react'
import GROCERI_LOGO from '../../assets/images/groceri_logo.jpg'


const HeaderLeft = () => {
    return (
        <View className='ml-36 '>
            <View className='flex flex-row items-center justify-center'>
                <Image source={GROCERI_LOGO} className='w-8 h-8 mx-1' />
                <Text className='text-lg font-medium'>Groceri</Text>
            </View>
        </View>
    )
}

export default HeaderLeft