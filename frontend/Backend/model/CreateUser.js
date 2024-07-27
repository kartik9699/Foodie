const mongoose=require('mongoose')
const { Schema } = mongoose;

const User = new Schema({
  Name:{
    type:String, 
    required:true
  } ,// String is shorthand for {type: String}
  Location:{
    type:String,
    required:true
  }, 
  Email:{
    type:String,
    required:true
  } 
 ,
 Password:{
    type:String,
    required:true
    },
  date: { type: Date, default: Date.now },
 
});
// This creates a 'User' collection in the database
module.exports = mongoose.model('User', User);