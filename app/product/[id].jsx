import { Link, Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator, TouchableOpacity, Pressable, ToastAndroid } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { selectEmail, selectToken, selectUserId } from '../../redux/slices/tokenSlice';


const ProductDetails = () => {

    const [productDetails, setProductDetails] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const token = useSelector(selectToken)
    const userEmail = useSelector(selectEmail)



    const { id } = useLocalSearchParams()

    const navigation = useNavigation()

    useLayoutEffect(() => {
        const setNavigationConfig = () => {
            const navigationOptions = () => {
                return {
                    headerShown: true,
                    title: 'Groceri',
                    headerStyle: {

                    },
                    headerTitleStyle: {
                        fontWeight: '',
                        fontSize: 24,
                        margin: 10
                    },

                    headerRight: () => (
                        <TouchableOpacity
                            className='mr-3'
                            onPress={() => {
                                // <Redirect  />

                            }}
                        >
                            <Link href='/Cart'> <AntDesign name="shoppingcart" size={24} color="black" /></Link>
                        </TouchableOpacity>
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
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://192.168.1.126:3000/home/product/${id}`)

                if (response.status == 200) {

                    const data = await response.json()
                    setProductDetails(data.response)
                    setSelectedImage(data?.response?.images[0])
                } else {
                    throw Error(response.message)
                }

            } catch (error) {
                const messsage = error.message
                console.error(messsage)
                // return error
            }

        }
        fetchProductDetails()
    }, [])

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };


    const handleQuantity = (operator) => {
        setQuantity((prev) => {
            if (prev == 0 && operator == -1) {
                return prev;
            }
            return (prev += operator);
        });
    };

    const handleAddToCart = async () => {
        if (!token) {
            ToastAndroid.show("Login to add products to cart", ToastAndroid.TOP)
            navigation.navigate("Login")
        }
        else {

            const product = {
                email: userEmail,
                product_id: id,
                quantity
            }
            console.log(product);

            try {
                const response = await fetch(`http://192.168.1.204:3000/home/add-to-cart`, {
                    method: "POST",
                    body: JSON.stringify(product),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.status == 200) {

                    const data = await response.json()
                    console.log(data);

                    // setProductDetails(data.response)
                    // setSelectedImage(data?.response?.images[0])
                } else {
                    throw Error(response.message)
                }

            } catch (error) {
                const messsage = error.message
                console.error(messsage)
                // return error
            }
        }

    }


    if (!productDetails) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#3182CE" />
            </View>
        );
    }




    return (
        <>
            <ScrollView className='bg-white rounded-xl m-2 ' >

                <View className=" border-b  ">
                    <View className=" ">
                        <Image
                            source={{ uri: selectedImage }}
                            alt="Selected Product"
                            className="h-72 w-72 mx-auto"
                        />
                    </View>
                    <View className="flex flex-row items-center mx-auto">
                        {productDetails?.images?.map((image, index) => (
                            <TouchableOpacity className='mx-2 my-2' key={index} onPress={() => handleImageClick(image)} >
                                <Image

                                    source={{ uri: image }}
                                    alt={`Product ${index + 1}`}
                                    className={` rounded-lg h-20 w-20 border ${selectedImage !== null && selectedImage === image
                                        ? "border-black-500"
                                        : "border-green-500"
                                        }`}

                                />
                            </TouchableOpacity>
                        ))}
                    </View>


                </View>

                <View className='my-2 mx-1'>

                    <View>
                        <Text className='text-[20px] mx-2 font-semibold'>
                            {productDetails?.name}
                        </Text>
                    </View>

                    <View>
                        <Text className='text-[18px] mx-2 my-2 font-medium'>
                            Price: <Text className="mx-0.5 font-semibold">&#8377;</Text> {productDetails?.price}
                        </Text>
                    </View>

                    <View className='flex flex-row items-center mx-2'>
                        <Text className='font-semibold text-[18px]'>Tags: </Text>
                        <Text className='border border-b-2 px-1 mx-1 text-[16.5px] text-gray-500'>{productDetails?.category.name} </Text>
                        <Text className='border border-b-2 px-1 mx-1 text-[16.5px] text-gray-500'>{productDetails?.subcategory.name} </Text>
                    </View>


                    <View className=" my-3 py-3 border border-gray-200 rounded-xl w-48  flex flex-row justify-start items-center ">


                        <Pressable
                            className="mx-5 hover:bg-slate-400 hover:p-1"
                            onPress={() => {
                                handleQuantity(-1);
                            }}
                        >
                            <AntDesign name="minuscircle" size={26} color="#02B290" />
                        </Pressable>
                        <View><Text className=" mx-5 text-[18px] font-semibold">{quantity}</Text></View>
                        <Pressable
                            className="mx-5 hover:bg-slate-400 hover:p-1"
                            onPress={() => {
                                handleQuantity(+1);
                            }}
                        >
                            <AntDesign name="pluscircle" size={26} color="#02B290" />
                        </Pressable>
                    </View>


                    <View className='mx-1.5 my-2'>
                        <Text className='font-semibold text-[18px]'>Product Description:</Text>
                        <Text className='text-[15px] font-normal'>{productDetails.description}</Text>
                    </View>

                </View>





            </ScrollView>

            <View className='flex flex-row items-center justify-evenly w-full'>

                <Pressable onPress={handleAddToCart} className='py-4 px-10 bg-lime-300 opacity-90 '><Text className='font-medium text-[16px] '>Add to cart</Text></Pressable>
                <Pressable className='py-4 px-10 bg-yellow-300 '><Text className='font-medium text-[16px] '>Buy Now</Text></Pressable>

            </View>


        </>
    )
}

export default ProductDetails