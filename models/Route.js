const mongoose = require ('mongoose')


const Schema = mongoose.Schema

const RouteSchema = new Schema ({
    title:String,
    description:String,
    creador:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    rating:[],
    stopsQuantity:Number,
    category: {
      type:String,
      enum:['Tradicional','Callejera', 'Dulce', 'Economico' , 'Bebidas' , 'Chef']
    },
    location:{},
    price:String,
    stops:[
      {
        name:String,
        lat:Number,
        lng:Number,
        rating:String,
        website:String,
        international_phone_number:Number
      }
    ],
    map:String

},{

  timestamps:{
    createdAt:'created_at',
    updatedAt:'updated_at'
  }
})


module.exports = mongoose.model ('Route', RouteSchema)