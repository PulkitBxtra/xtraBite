import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React,{useState, useEffect} from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon , MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../Components/Categories";
import FeaturedView from "../Components/FeaturedView";
import client from "../Sanity"
import 'react-native-url-polyfill/auto'

const HomeScreen = () => {
    //change the header hook
    const Navigation = useNavigation();

    const [featuredCategories, setFeaturedCategories] = useState([]);
  
    //do something as soon as the screen appears
    useLayoutEffect(() => {
      Navigation.setOptions({
        // headerTitle: "Testing",
        headerShown: false,
      });
    }, []);

    useEffect(() => {
      client
        .fetch(
          `*[_type == "featured"]{
            ...,
            restaurants[]->{
              ...,  
              dishes[]->{
              }
            }
      }`
        )
        .then((data) => setFeaturedCategories(data))
        .catch(console.error);
    }, []);
  
    return (
      <SafeAreaView className="bg-white">
  
        <View className="flex-row">
          <View className="mx-2 px-2 my-1">
            <Image
              source={{
                uri: "https://links.papareact.com/wru",
              }}
              className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
          </View>
  
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
            </Text>
          </View>
  
          <View className="mx-1 px-1 my-1">
            <UserIcon  size={35} color="#00CCBB"></UserIcon>
  
          </View>    
  
        </View>
  
        {/* ************Search**********  */}
  
  
        <View className="flex-row items-center space-x-2 pb-2 mx-2 px-2 py-1">
  
  
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
  
              
                <MagnifyingGlassIcon color="gray" size={20}></MagnifyingGlassIcon>
                <TextInput
                  placeholder="Restraunts and cuisines"
                  KeyboardType="default"
                />
  
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB"></AdjustmentsVerticalIcon>
  
        </View>

        <View className="bg-gray-100">
      <ScrollView>
        <Categories></Categories>

        <View className="pb-44">
        {
          featuredCategories?.map(category => (
            <FeaturedView
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.shortDescription}
              />
          ))
        }
        </View>

              

      </ScrollView>
    </View>
  
  
  
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;