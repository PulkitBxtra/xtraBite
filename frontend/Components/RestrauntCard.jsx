import { View, Text, TouchableOpacity , Image  } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";


const RestrauntCard = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity className="bg-white shadow mb-2">
        <Image source={{uri: props.imgUrl,}} className="h-36 w-64 rounded-sm">

        </Image>

        <View className="px-3 pb-4">
          <Text className="font-bold text-lg pt-2">{props.title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22}></StarIcon>
            <Text className="text-gray-500 text-xs"><Text className="text-green-500">{props.rating}</Text> · {props.genre} </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <MapPinIcon color="gray" opacity={0.5} size={22}></MapPinIcon>
            <Text className="text-gray-500 text-xs">Nearby · {props.address}</Text>

          </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestrauntCard