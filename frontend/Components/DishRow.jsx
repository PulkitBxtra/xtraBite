import { View, Text, TouchableOpacity ,Image } from 'react-native'
import React ,{useState} from 'react'
import { urlFor } from '../Sanity';
import { MinusCircleIcon , PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch , useSelector} from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../Features/BasketSlice';

const DishRow = (props) => {
    // console.log(props);

    const prop=props;

    const [isPressed,setIsPressed] = useState(false);

    const dispatch= useDispatch();

    const items= useSelector((state)=>selectBasketItemsWithId(state, props.id));


    // console.log(props.id);
    // console.log(items);

    const addItemToBasket = () =>{
        dispatch(addToBasket(prop))
        // console.log(prop);
    }

    const removeItemFromBasket = () =>{
        if(!items.length>0){
            return;
        }

        dispatch(removeFromBasket(prop.id));
        // console.log(prop.id)
    }

  return (
    <View>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className={`flex-row border p-4 justify-center bg-white border-gray-200 ${isPressed && `border-b-0`}`}>
        <View className="flex-1 justify-center">
            <Text className="text-lg mb-1">{props.name}</Text>
            <Text className="text-gray-400">{props.description}</Text>
            <Text className="text-gray-400 mt-2">₹ {props.price}</Text>
        </View>

        <View className="border border-teal-500">
            <Image source={{uri: urlFor(props.image).url(),}} className="h-20 w-20 bg-gray-300 p-4">

            </Image>
        </View>

    </TouchableOpacity>

    { isPressed && (
        
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity onPress={removeItemFromBasket}>
                    <MinusCircleIcon size={40} disabled={items.length} color={items.length>0 ?  "#00CCBB" : "gray"}></MinusCircleIcon>
                </TouchableOpacity>

                <Text>{items?.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                    <PlusCircleIcon size={40} color="#00CCBB"></PlusCircleIcon>
                </TouchableOpacity>
            </View>
        </View>
    
    
  )
}
    </View>
)}

export default DishRow