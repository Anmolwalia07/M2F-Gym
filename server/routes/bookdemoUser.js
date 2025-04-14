import express from "express"
import demoUser from "../models/demoUserModel.js";
import sendDemoMails from "../nodemail/demoEmail.js"
const router =express.Router();

router.post("/demoUser",async(req,res)=>{
    const {name,phone,city,email,demoType}=req.body;
    const response=await demoUser.findOne({where:{email}});
    if(response) return res.json({message:`Sorry,You have allready taken the Demo Class for ${response.demoType}`});
    const response1=await demoUser.findOne({where:{phone}});
    if(response1) return res.json({message:`Sorry,You have allready taken the Demo Class for ${response.demoType}`});
    try{
        const user=await demoUser.create({name,phone,city,email,demoType});
        res.json({booking:"Demo Class is booked successfully",user:user});
        sendDemoMails({email:user.email,name:user.name ,demoType});
    }
    catch(err){
        console.log(err);
    }
})

export default router;