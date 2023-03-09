export default{
    name:"featured",
    Title:"Featured Menu Categories",
    type:"document",

    fields:[
        {
            name:"name",
            type:"string",
            title:"Featured Category name",
            validation: (Rule) => Rule.required(),
        },

        {
            name:"shortDescription",
            type:"text",
            title:"Short Description",
            validation: (Rule) => Rule.required(),
        },

        {
            name:"restaraunts",
            type:"array",
            title:"Restaraunts",
            of:[{type:"reference", to:  [{type:"restaurants"}] }],
            // of:[{type:"reference", to: [{type:"dishes"}] }]

        },
    ]
}