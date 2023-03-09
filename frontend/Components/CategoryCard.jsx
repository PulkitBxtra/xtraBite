import { View, Text , TouchableOpacity , Image } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
    // console.log(props.imgUrl);

  return (
    <TouchableOpacity className='mr-2 relative'>
        <Image
            source={{
              uri: props.imgUrl,
            }}
            className='h-20 w-20 rounded'
          />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard