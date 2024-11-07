import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from './RestrauntCard';
import client from '../Sanity';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const FeaturedView = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
            ...,  
            dishes[]->,
            type->{
              name
            }
          },
        }[0]
      `,
        { id: props.id }
      )
      .then((data) => setRestaurants(data?.restaurants))
      .catch((err) => console.log(err));
  }, [props.id]);

  console.log("These are the restaurants:", restaurants);

  return (
    <View>
      <View className="flex-row mt-4 px-4 justify-between items-center">
        <Text className="text-lg font-bold">{props.title}</Text>
        <ArrowRightIcon color="#00CCBB" size={30} />
      </View>

      <View>
        <Text className="text-xs text-gray-500 px-4">{props.description}</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      >
        {restaurants.map((restaurant) => (
          <RestrauntCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.Image} // Adjusted to lowercase
            title={restaurant.name}
            rating={restaurant.rating}
            address={restaurant.address} // Adjusted if needed
            genre={restaurant.type?.name}
            ShortDescription={restaurant.shortDescription} // Adjusted capitalization if needed
            dishes={restaurant.dishes}
            long={restaurant.long}
            latt={restaurant.latt}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedView;
