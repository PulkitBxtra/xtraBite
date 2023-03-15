import { View, Text,SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const PrepairingOrderScreen = () => {

    const Navigation=useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            Navigation.navigate("DeliveryScreen");
        },4000)
    },[])

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/food1.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-[200] w-[200]"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-md my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      {/* <Progress.Circle size={60} indeterminate={true} color="white"  /> */}
      {/* <Progress.Circle size={60} indeterminate={true} color='white' /> */}
      {/* <Progress.CircleSnail color={['red', 'green', 'blue']} /> */}

    </SafeAreaView>
  )
}

export default PrepairingOrderScreen