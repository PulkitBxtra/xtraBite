import { View, Text , ScrollView } from 'react-native'
import React, { useEffect , useState } from 'react'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon , MagnifyingGlassIcon , ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from './RestrauntCard';
import client from '../Sanity';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const FeaturedView = (props) => {

  const [restaurants,setRestaurants] = useState([]);

  useEffect(()=>{
    client.fetch(`
    *[_type == "featured" && _id == $id]{
      ...,
      restaraunts[]->{
        ...,  
        dishes[]->,
        type->{
          name
        }  
        },
      }[0]
    `,{id:props.id})
    .then((data)=>setRestaurants(data?.restaraunts))
    .catch((err)=>console.log(err));
  },[]);

  // console.log(restaurants);

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
        showHorizontalScrollIndicator={false}
        
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        className="pt-4"
        >


          {restaurants.map(restaurant =>(

            <RestrauntCard
                    key= {restaurant._id}
                    id= {restaurant._id}
                    imgUrl={restaurant.Image}
                    title={restaurant.name}
                    rating={restaurant.rating}
                    address={restaurant.Address}
                    genre={restaurant.type.name}
                    ShortDescription={restaurant.ShortDescription}
                    dishes={restaurant.dishes}
                    long={restaurant.long}
                    latt={restaurant.latt}
            />
          ))}

           

            

        </ScrollView>

    </View>
  )
}

export default FeaturedView