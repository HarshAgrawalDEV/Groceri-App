import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import CAROUSEL1 from "@/assets/carousel-img/carousel-1.webp";
import CAROUSEL2 from "@/assets/carousel-img/carousel-2.webp";
import CAROUSEL3 from "@/assets/carousel-img/carousel-3.webp";
import CAROUSEL4 from "@/assets/carousel-img/carousel-4.webp";
import { generateRandomHexColor } from '../../util/GenerateRandomColor';

const BannerCarousel = () => {

    const cards = [
        {
            id: 1,
            title: "Your pet choice for fresh healthy food",
            image: CAROUSEL1,
        },
        { id: 2, title: "Spring cleaning for home appliances", image: CAROUSEL2 },
        { id: 3, title: "Washing item with discount product", image: CAROUSEL3 },
        { id: 3, title: "Fresh Quality meat item with discount", image: CAROUSEL4 },
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
                scrollAnimationDuration={3000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <View key={item.id} className="h-auto ">
                        <View className={`   bg-[#${generateRandomHexColor(item.id)}] rounded-lg shadow-lg overflow-hidden flex  items-center justify-between`}>
                            <Image
                                source={item.image}

                                className="w-32 h-32 object"
                            />
                            <View className="">
                                <Text className="text-lg w-full font-semibold mb-2">{item.title}</Text>
                                <Text className="text-gray-600">Get your clean on supplies</Text>
                            </View>
                        </View>
                    </View>
                )
                }
            />
        </View >
    );
}

export default BannerCarousel