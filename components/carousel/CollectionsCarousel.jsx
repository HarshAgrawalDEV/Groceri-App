import { View, Text, Image, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import COLLECTION1 from "@/assets/carousel-img/collection-1.webp";
import COLLECTION2 from "@/assets/carousel-img/collection-2.webp";
import COLLECTION3 from "@/assets/carousel-img/collection-3.webp";
import COLLECTION4 from "@/assets/carousel-img/collection-4.webp";
import Carousel from 'react-native-reanimated-carousel';



const CollectionsCarousel = () => {

    const cards = [
        {
            id: 1,
            title: "Feel the Thirst in summer anytime",
            description: "Your body's way of telling you that it's make strong",
            image: COLLECTION1,
        },
        {
            id: 2,
            title: "Most popular item for Fast food",
            image: COLLECTION2,
            description: "Tasty and spicy fast food with different flavors.",
        },
        {
            id: 3,
            title: "Authentic japanese food in real taste",
            image: COLLECTION3,
            description: "Your body's way of telling you that it's make strong",
        },
        {
            id: 3,
            title: "Explore our family of freshest Foods",
            description: "Your pet’s way of telling you that it's make taste",
            image: COLLECTION4,
        },
    ];


    const width = Dimensions.get('window').width;
    return (
        <View className='flex my-3'>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={cards}
                scrollAnimationDuration={2000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <>
                        <View key={item.id} className="my-2 mx-2">
                            <View className="bg-white rounded-lg shadow-lg overflow-hidden ">
                                <Image
                                    source={item.image}
                                    alt={item.title}
                                    className=""
                                />

                            </View>
                            <View className="">
                                <Text className="text-lg font-semibold mb-2 hover:text-[#02b290]">
                                    {item.title}
                                </Text>
                                <Text className="text-gray-600">{item.description}</Text>
                            </View>
                        </View>
                    </>
                )
                }
            />
        </View >
    );
}

export default CollectionsCarousel


