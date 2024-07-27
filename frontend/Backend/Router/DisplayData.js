const express=require('express')
const router=express.Router()
router.post(
    '/DisplayData',(req,res)=>{
        try {
            res.send([global.foods,global.Category])
        } catch (error) {
           console.error(error.message) ;
           res.send("server error")
        }
    }
)
module.exports=router;