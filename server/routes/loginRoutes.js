import express from "express"
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import { authenticatejwt } from "../middleware/auth.js";
const router=express.Router();

router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    console.log(password)
    const user=await User.findOne({where:{username}});
    if(!user) return res.json({user:null,message:"Invaild Username"});
    console.log(user);
    const isValidPassword=await bcrypt.compare(password,user.password);
    if(!isValidPassword) return res.json({user:null,message:"Invalid password"});
    const token = jwt.sign(
        { id: user.id , role:user.role ,name :user.name, username:user.username},
        process.env.SECRET_KEY, // Your secret key from environment variables
        { expiresIn: '1h' } // Token will expire in 1 hour
    );
    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side JS from accessing the cookie
        secure: true, // Sends cookie over HTTPS only in production
        maxAge: 3600000, // Cookie expires in 1 hour
        sameSite: 'Strict', // CSRF protection (adjust as needed)
    });
    res.json({user:user,message:"" ,token:token})
})

router.post("/logout",authenticatejwt,(req,res)=>{
    res.clearCookie('token');
    res.json({message:"Logged out successfully"});
})

export default router;
