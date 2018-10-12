const mongoose = require ('mongoose')
const passportLocalMongoose = require ('passport-local-mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
    username:{
      type:String,
      required:true
    },
    email:String,
    photoUrl:String,
    about:String,
    routes:[
      {
      type:Schema.Types.ObjectId,
      ref:'Route'
    }
  ]
},{

  timestamps:{
    createdAt:'created_at',
    updatedAt:'updated_at'
  }
})


UserSchema.plugin (passportLocalMongoose, {usernameField:'email'})

module.exports = mongoose.model ('User', UserSchema)