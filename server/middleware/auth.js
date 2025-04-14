import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
export const authenticatejwt=(req,res,next)=>{
    const token = req.cookies.token;
    if(!token) return res.json({message :'Access denied. No token provided'})
        try {
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    req.user=decoded;
    next()
    } catch (ex) {
        res.send('Invalid token')
    }
}