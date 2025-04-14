import Offer from "../models/offerModel.js";
import express from "express"
import { authorization } from "../middleware/role.js";
import { authenticatejwt } from "../middleware/auth.js";
const router=express.Router();

router.get("/allOffers",authenticatejwt,authorization("admin"),async(req,res)=>{
    const offers=await Offer.findAll();
    res.status(200).json(offers);
    console.log(offers);
})

router.post("/createOffer",authenticatejwt,authorization("admin"),async(req,res)=>{
    const {fee,type,timePeriod}=req.body;
    try{
        const response=await Offer.create(req.body);
        res.status(200).send("Created Sucessfully");
    }
    catch(err){
        console.log(err);
    }
})

router.delete("/deleteOffer/:id",authenticatejwt,authorization("admin"),async(req,res)=>{
    const id=parseInt(req.params.id)
    const response=await Offer.findOne({where:{id:id}})
    const check=response.destroy();
})

export default router