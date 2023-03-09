import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name:"dishName",
      type:"string",
      title:"name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name:"shortDescription",
      type:"text",
      title:"Short Description of dish",
      // validation: (Rule) => Rule.required(),
    },
    {
      name:"price",
      type:"number",
      title:"Price of dish in INR",
      // validation: (Rule) => Rule.required(),
    },
    {
      name:"name",
      type:"image",
      title:"Image of the dish",
      // validation: (Rule) => Rule.required(),
    }

  ],
  
})
