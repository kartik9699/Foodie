const express=require('express')
const router=express.Router()
const user =require('../model/CreateUser')
const{ body, validationResult}=require('express-validator')
router.post("/createuser",[body('Email','incorrect Email').isEmail(),body('Password','incorrect Password').isLength({min: 5}),body('Name').isLength({min: 5})] ,async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
try {
   await user.create({
        Name:req.body.Name,
        Email:req.body.Email,
        Password:req.body.Password,
        Location:req.body.Location
    })
    res.json({
        success:true
    })
} catch (error) {
    console.log(error)
    res.json({
        success:false
    })
}
}
)
module.exports=router;