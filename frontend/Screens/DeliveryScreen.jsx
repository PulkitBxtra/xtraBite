import { View, Text , SafeAreaView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../Features/RestaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from "react-native-progress"
// import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = () => {

    const Navigation= useNavigation();
    const restaurant= useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={()=>Navigation.navigate("Home")}>
                <XMarkIcon color="white" size={30}></XMarkIcon>
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-5 rounded-md p-6 z-50 shadow-md">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl font-bold">45-55 Minutes</Text>
                </View>
                <Image
                    source={{uri: "https://links.papareact.com/fls"}}
                    className="h-20 w-20"
                >
                </Image>
                
            </View>    

            <Progress.Bar size={30} color="#00CCBB" indeterminate={true}/>

            <Text className="mt-3 text-gray-500">
                Your order at {restaurant.title}is being prepared! 
            </Text>
        </View>
      </SafeAreaView>

        {/* <MapView
        
        initialRegion={{
            // latitude: restaurant.latt,
            // longitude: restaurant.long,
            latitude: 28.609570,
            longitude: 77.035271,
            latitudeDelta:0.005,
            longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
        >
        
        <Marker
            coordinate={{
                longitude: 77.035271,
                latitude: 28.609570,
            }}
            title={restaurant.title}
            identifier="origin"
            pinColor='#00CCBB'
        />


        </MapView>
          */}
         <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
            <Image
                source={{uri: `https://links.papareact.com/wru`}}
                className="h-12 w-12 bg-gray-200 p-4 rounded-full ml-5"
            />
            <View className="flex-1">
                <Text className="text-lg">Driver Name</Text>
                <Text className="text-gray-400">Your rider </Text>
            </View>

            <View>
                <Text className="text-[#00CCBB] text-lg font-bold mr-5">Call</Text>
            </View>
            
         </SafeAreaView>

    </View>
  )
}

export default DeliveryScreen