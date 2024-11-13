const mongoose = require('mongoose');
const mongodb=async ()=>{
await mongoose.connect('mongodb+srv://KartikP:Kparab123@kartikp.raibh.mongodb.net/GoFood?retryWrites=true&w=majority&appName=KartikP')
  .then(() => console.log('Connected!'));
  const fetch_data= await mongoose.connection.db.collection("Foods");
  const data=await fetch_data.find().toArray();
  const FoodCategory=await mongoose.connection.db.collection("FoodCategory");
  const Category=await FoodCategory.find({}).toArray();
  global.foods=data;
  global.Category=Category;
 // console.log(global.foods);

}
  module.exports=mongodb;
