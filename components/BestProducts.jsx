import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { useLocalSearchParams } from 'expo-router';

const BestProducts = () => {
    // const [searchParams, setSearchParams] = useSearchParams()
    // const location = useLocation();
    const [products, setProducts] = useState([])




    // const { pathname, search, hash } = location;

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



    return (

        <>

            <View className='md:mx-10'>

                {/* {
                    pathname === "/" && */}


                <View className='text-center my-10'>

                    <Text className='text-2xl font-medium py-1'>Best Groceries In Our Store</Text>
                    <Text className=' font-normal py-1'>We provide best quality & fresh grocery items near your location</Text>

                </View>
                {/* } */}
                <View className='md:py-10 py-5'>

                    <View className='flex-1 flex-row flex-wrap'>
                        {
                            products?.map((item, index) => (
                                <ProductCard key={item._id} item={item} />
                            ))
                        }
                    </View>

                </View>


            </View>
        </>
    )
}

export default BestProducts