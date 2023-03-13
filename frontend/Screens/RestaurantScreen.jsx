import { View, Text, ScrollView ,Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useRoute , useNavigation } from '@react-navigation/native'
import { urlFor } from '../Sanity';
import { ArrowLeftIcon , StarIcon , MapPinIcon , ChevronRightIcon } from 'react-native-heroicons/solid';
import {QuestionMarkCircleIcon} from 'react-native-heroicons/outline'
import DishRow from '../Components/DishRow';

const RestaurantScreen = () => {
    const route = useRoute();
    // console.log(route.params.props.di);
    const navigation  = useNavigation();

    const dishes = route.params.props.dishes;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    },[])

  return (
    <ScrollView>
    <View className="relative">
        <Image source={{uri: urlFor(route.params.props.imgUrl).url(),}}
            className="w-full h-56 bg-gray-300 p-4"
        ></Image>
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CCBB"></ArrowLeftIcon>
        </TouchableOpacity>

        <View className="bg-white px-3">
            <View className=" pt-4">
                <Text className="text-3xl font-bold">{route.params.props.title}</Text>
            </View>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
                    <Text className="text-gray-500 text-xs"><Text className="text-green-500">{route.params.props.rating}</Text> · {route.params.props.genre} </Text>
                </View>
                
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color="gray" opacity={0.5} size={22}></MapPinIcon>
                    <Text className="text-gray-500 text-xs">Nearby · {route.params.props.address}</Text>
                </View>
            </View>
                <Text className="text-gray-500 mt-2 pb-4">{route.params.props.ShortDescription}</Text>
        </View>

        <TouchableOpacity className="bg-white flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}>
            </QuestionMarkCircleIcon>
                <Text className="pl-2 flex-1 text-md font-bold">
                    Do you have Food Allergies?
                </Text>
            <ChevronRightIcon color="#00CCBB"></ChevronRightIcon>
        </TouchableOpacity>
    <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">
            Menu
        </Text>
        
        {dishes?.map((dish)=>(
            <DishRow 
                key={dish._id}
                id={dish._id}
                name={dish.dishName}
                description={dish.shortDescription}
                price={dish.price}
                image={dish.name}
            ></DishRow>
        ))}

    </View>
    </View>
    </ScrollView>
  )
}

export default RestaurantScreen