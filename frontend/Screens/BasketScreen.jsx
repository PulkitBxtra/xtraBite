import { View, Text, SafeAreaView , TouchableOpacity , Image , ScrollView} from 'react-native'
import React,{useMemo, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../Features/RestaurantSlice';
import { selectBasketItems , removeFromBasket, selectBasketTotal} from '../Features/BasketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../Sanity';

const BasketScreen = () => {

    const Navigator= useNavigation();
    const restaurant= useSelector(selectRestaurant);
    const items= useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const BasketTotal= useSelector(selectBasketTotal);
    const Route = useRoute();

    const [groupedItems,setGroupedItems] = useState([]);

    // console.log(items);

    useMemo(()=>{
        const grouped= items.reduce((results,item)=>{
            (results[item.id]= results[item.id] || []).push(item);
            return results
        },{});

        setGroupedItems(grouped);
        // console.log(grouped);

    },[items]);

    // console.log(groupedItems);

    

  return (
    <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
            <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>

                <TouchableOpacity
                    onPress={Navigator.goBack}
                    className="rounded-full bg-gray-100 absolute top-3 right-5 "
                >
                    <XCircleIcon color="#00CCBB" height={50} width={50}></XCircleIcon>
                </TouchableOpacity>

            </View>

            <View className="flex-row items-center space-x-4 px-4 py-4 bg-white my-5">
                <Image
                    source={{
                        uri:  "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full "
                />

                <Text className="flex-1">Deliver in 50-75 Minutes</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB]">Change</Text>
                </TouchableOpacity>
            </View>

            <ScrollView className="divide-y divide-gray-200">
                    {Object.entries(groupedItems).map(([key,items])=>(
                        <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                            <Text className="text-teal-500">{items.length} x </Text>
                            <Image
                                source={{uri: urlFor(items[0]?.image).url(),}}
                                className="h-12 w-12 rounded-full"
                            />
                            <Text className="flex-1">{items[0]?.name}</Text>
                            <Text className="text-gray-500">₹ {items[0]?.price}</Text>

                            <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id:key}))}>
                                  <Text className="text-[#00CCBB] text-xs">Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
            </ScrollView>

            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">₹ {BasketTotal}</Text>
                </View>
                
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery Fee</Text>
                    <Text className="text-gray-400">₹ 15</Text>
                </View>
                    

                <View className="flex-row justify-between">
                    <Text className="text-black">Order Total</Text>
                    <Text className="text-black">₹ {BasketTotal + 15}</Text>
                </View>

                <TouchableOpacity onPress={()=>Navigator.navigate('PrepairingOrderScreen')} className="bg-[#00CCBB] p-4 rounded-lg">
                        <Text className="text-center text-white font-bold text-lg">Place Order</Text>
                </TouchableOpacity>

            </View>

        </View>
    </SafeAreaView>
  )
}

export default BasketScreen