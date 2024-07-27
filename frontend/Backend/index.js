const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
const mongodb=require("./db")
mongodb()
app.use(cors());
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept"
//   );
// })
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api',require('./Router/NewUser'));
app.use('/api',require('./Router/Loginuser'));
app.use('/api',require('./Router/DisplayData'));
// app.use('/api',require('./Router/UpdateData'));
app.use('/api',require('./Router/OrderData'));
app.use('/api',require('./Router/DisplayOrders'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})