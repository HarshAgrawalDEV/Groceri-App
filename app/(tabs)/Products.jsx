import { View, Text, ScrollView, TouchableOpacity, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { Link, useNavigation } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import HeaderRight from '../../components/Header/HeaderRight';
import FilterButton from '../../components/FilterButton';
import { Picker } from '@react-native-picker/picker'

const Products = () => {
    const [products, setProducts] = useState([])
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [sortBy, setSortBy] = useState('priceAsc');
    const navigation = useNavigation()

    useLayoutEffect(() => {
        const setNavigationConfig = () => {
            const navigationOptions = () => {
                return {
                    headerShown: true,
                    title: '',
                    headerStyle: {

                    },


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

        const fetchProducts = async () => {
            try {
                const response = await fetch('http://192.168.1.126:3000/home/products')
                if (response.status == 200) {

                    const data = await response.json()
                    setProducts(data.response)
                } else {
                    throw Error(response.message)
                }

            } catch (error) {
                const messsage = error.message
                console.error(messsage)
                // return error
            }
        }
        fetchProducts()
    }, [])





    const filteredProducts = () => {
        if (categoryFilter === 'all') {
            return products;
        } else {
            return products.filter(item => item.category.name === categoryFilter);
        }
    };

    const sortedProducts = () => {
        return filteredProducts().sort((a, b) => {
            if (sortBy === 'priceAsc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
    };

    if(products.length<1){
        return <ActivityIndicator className='flex-1'/>
    }

    return (
        <>
            <ScrollView>
                <View className='md:py-10 py-5'>


                    <View className='flex flex-row flex-wrap items-center justify-evenly '>
                        <FilterButton title="All" onPress={() => setCategoryFilter('all')} className='' />
                        <FilterButton title="Fruits" onPress={() => setCategoryFilter('Fruits')} />
                        <FilterButton title="Vegies" onPress={() => setCategoryFilter('Vegetables')} />
                        <FilterButton title="Beverages" onPress={() => setCategoryFilter('Beverages')} />
                        <FilterButton title="Herbs" onPress={() => setCategoryFilter('Herbs & Seasonings')} />
                        <FilterButton title="Foodgrains" onPress={() => setCategoryFilter('Foodgrains, Oil & Masala')} />

                    </View>

                    <View>
                        <Text>Sort:</Text>
                        <Picker
                            selectedValue={sortBy}
                            onValueChange={(itemValue, itemIndex) =>
                                setSortBy(itemValue)
                            }>
                            <Picker.Item label="High to low" value="priceDesc" />
                            <Picker.Item label="Low to high" value="priceAsc" />
                        </Picker>
                    </View>



                    <View className='flex-1 flex-row flex-wrap'>
                        {
                            sortedProducts()?.map((item, index) => (
                                <ProductCard key={item._id} item={item} />
                            ))
                        }
                    </View>

                </View>
            </ScrollView>

            {/* <View className='flex flex-row items-center justify-evenly w-full'>
                <Pressable className='py-4 px-10 bg-lime-300 opacity-90 '>
                   
                    <Text className='font-medium text-[16px] '>Filter</Text>
                  
                </Pressable>
                <Pressable className='py-4 px-10 bg-yellow-300 '><Text className='font-medium text-[16px] '>Sort</Text></Pressable>
            </View> */}

        </>
    )
}

export default Products