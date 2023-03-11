import { View, Text, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import CategoryCard from './CategoryCard'
import client from '../Sanity';

const Categories = () => {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{
    client.fetch(`
      *[_type=="category"]
    `)
    .then((data)=>setCategories(data))
    .catch((err)=>console.log(err))
  },[])

  // console.log(categories)

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>
        {categories.map((category)=>(
          <CategoryCard 
            key= {category._id}
           imgUrl={category.image}
           title={category.name}
           />
        ))}
    </ScrollView>
  )
}

export default Categories