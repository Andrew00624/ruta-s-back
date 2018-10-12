const mongoose = require ('mongoose')


const Schema = mongoose.Schema

const RouteSchema = new Schema ({
    title:String,
    description:String,
    creador:{
      type:Schema.Types.ObjectId,
      ref:'User'
    },
    restaurantList:[],
    rating:[],
    stops:Number,
    category: {
      type:String,
      enum:['Tradicional','Callejera', 'Dulce', 'Economico' , 'Bebidas' , 'Cocina de autor']
    },
    price:String,
    pictures:[],
    map:String

},{

  timestamps:{
    createdAt:'created_at',
    updatedAt:'updated_at'
  }
})


module.exports = mongoose.model ('Route', RouteSchema)