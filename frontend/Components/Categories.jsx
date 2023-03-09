import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal: 15, paddingTop: 10}}>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"></CategoryCard>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing2"></CategoryCard>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing3"></CategoryCard>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing4"></CategoryCard>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing5"></CategoryCard>
      {/* <Text>Categories</Text> */}
    </ScrollView>
  )
}

export default Categories