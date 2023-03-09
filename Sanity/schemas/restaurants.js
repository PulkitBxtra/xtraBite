import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurants',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
    name:"name",
    type:"string",
    title:"Restaurant Name",
    validation : (Rule) => Rule.required(),
    },
   {
    name:"ShortDescription",
    type:"text",
    title:"Short Description",
    validation : (Rule) => Rule.max(200),
   },
   {
    name:"Image",
    type:"image",
    title:"Image of the Restaurant",
    validation : (Rule) => Rule.required(),
   },
   {
    name:"latt",
    type:"number",
    title:"Lattitude",
    validation : (Rule) => Rule.required(),
   },
   {
    name:"long",
    type:"number",
    title:"Longitude",
    validation : (Rule) => Rule.required(),
   },
   {
    name:"Address",
    type:"string",
    title:"Address",
    validation : (Rule) => Rule.required(),
   },
   {
    name:"rating",
    type:"number",
    title:"Enter a rating (1-5 Stars)",
    validation : (Rule) => Rule.required().min(1).max(5).error("please enter a value between 1 and 5 stars"),
   },
   {
    name:"type",
    title:"category",
    validation : (Rule) => Rule.required(),
    type:"reference",
    to:[{type:"category"}],
   },
   {
    name:"dishes",
    type:"array",
    title:"Dishes",
    of:[{type:"reference", to: [{type:"dish"}] }]

   },

  ],


})
