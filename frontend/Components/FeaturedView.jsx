import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon , MagnifyingGlassIcon , ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from './RestrauntCard';

const FeaturedView = (props) => {
    // console.log(props);
  return (
    <View>
      <View className="flex-row mt-4 px-4 justify-between items-center">
        <Text className="text-lg font-bold">{props.title}</Text>
        <ArrowRightIcon color="#00CCBB" size={30}></ArrowRightIcon>
      </View>

        <View>
            <Text className="text-xs text-gray-500 px-4">
                {props.description}
            </Text>
        </View>

        <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showHorizontalScrollIndicator={false}
        className="pt-4"
        >

            <RestrauntCard
                    id="1"
                    imgUrl="http://links.papareact.com/gn7"
                    title="Yo! Sushi"
                    rating="6.9"
                    address="Dwarka Mor"
                    genre="Japanese"
                    ShortDescription="not so short"
                    dishes={[]}
                    long="5"
                    latt="8"
            />

        </ScrollView>

    </View>
  )
}

export default FeaturedView