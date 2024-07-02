import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import Banner from '../../components/Banner'


import BannerCarousel from '../../components/carousel/BannerCarousel'
import BestProducts from '../../components/BestProducts'
import DiscountBanner from '../../components/DiscountBanner'
import CollectionsCarousel from '../../components/carousel/CollectionsCarousel'
import { useDispatch, useSelector } from 'react-redux'
import { retrieveToken, selectToken } from '../../redux/slices/tokenSlice'
import { useNavigation } from 'expo-router'
import HeaderLeft from '../../components/Header/HeaderLeft'
import HeaderRight from '../../components/Header/HeaderRight'





const Home = () => {

    const dispatch = useDispatch()
    const token = useSelector(selectToken)

    const navigation = useNavigation()


    useLayoutEffect(() => {
        const setNavigationConfig = () => {
            const navigationOptions = () => {
                return {
                    headerShown: true,
                    title: "",
                    headerStyle: {

                    },

                    headerLeft: () => (
                        <HeaderLeft />
                    ),

                    headerRight: () => (
                        <HeaderRight />
                    ),

                };
            };

            // const navigationParams = () => {
            //   return {
            //     headerLeftImage: someImageHere,
            //     headerStyle: {
            //       backgroundColor: someColorHere,
            //     },
            //   };
            // };

            // navigation.setParams(navigationParams());
            navigation.setOptions(navigationOptions());
        };

        setNavigationConfig();
    }, [navigation])

    useEffect(() => {

        dispatch(retrieveToken)

    }, [])
    console.log("Home",token);

    return (
        <ScrollView className=''>
            <Banner />

            <BannerCarousel />

            <BestProducts />

            <DiscountBanner />

            <CollectionsCarousel />


        </ScrollView>
    )
}

export default Home