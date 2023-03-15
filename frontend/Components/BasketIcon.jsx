import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Features/BasketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const Navigator = useNavigation();
    const BasketTotal = useSelector(selectBasketTotal);

    if(items.length===0){
      return null;
    }


  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=> Navigator.navigate("Basket")} className="mx-5 bg-[#00CCBB] flex-row p-4 rounded-lg items-center space-x-2 ">
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold text-lg  text-center">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
        ₹ {BasketTotal}
        {/* ₹ 122 */}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon