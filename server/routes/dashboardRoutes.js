import express from "express"
import { authorization } from "../middleware/role.js";
import { authenticatejwt } from "../middleware/auth.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import generateQr from "../qrcode/qrcode.js";
import sendmail from "../nodemail/email.js";
const router=express.Router();

router.get("/dashboard",authenticatejwt,authorization("admin"),(req,res)=>{
    res.json({message:"Welcome to dashboard",redirect:"/dashboard"})
})

router.post("/register",authenticatejwt,authorization("admin"),async(req,res)=>{
    const {name,email,username,password,role}=req.body;
    const response=await User.findOne({where:{username}})
    if(response) return res.json({message:"Username exists"})
    const response1=await User.findOne({where:{email}});
    if(response1) return res.json({message:"Email exists"});
    try{
        const userpassword=password;
        const hashpassword=await bcrypt.hash(password,10)
        const user = await User.create({name,email,password:hashpassword,username,role});
        res.json({message:"User Register successfully",user:user,redirect:"/dashboard"});
        const responseToQr= generateQr({data:`${user.name}\n${userpassword}`,name:user.name});
        const subject ="M2F Register"
        sendmail({email:user.email,subject:subject,user:user,userpassword:userpassword,path:responseToQr});
    }
    catch(err){
        console.log(err);
    }
})

export default router;