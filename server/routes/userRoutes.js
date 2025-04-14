import express from 'express'
import { authenticatejwt } from '../middleware/auth.js';
import { authorization } from '../middleware/role.js';
import User from '../models/userModel.js';
const router=express.Router();

router.get("/getUsers",authenticatejwt,authorization("admin"),async(req,res)=>{
    const user = await User.findAll();
    res.json({user:user});
})

router.get("/user/:username",authenticatejwt,authorization(["admin","user"]),async(req,res)=>{
    const username=req.params.username;
    const user=await User.findOne({where:{username}});
    console.log(user)
    res.json({user:user});
})
export default router