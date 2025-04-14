import express from 'express'
import dotenv from 'dotenv'
import sequelize from './config/db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import loginRoutes from "./routes/loginRoutes.js"
import dashboardRoutes from "./routes/dashboardRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import bookDemoUserRoutes from "./routes/bookdemoUser.js"
import offerRoutes from "./routes/offerRoutes.js"
const app=express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const corsOptions = {
    origin: 'http://localhost:5173', // replace with your client URL
    methods: ['GET', 'POST','PUT','DELETE'], // specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // specify allowed headers
    credentials: true, // Allows credentials (cookies) to be sent
};

app.use(cors(corsOptions));

app.use("/",loginRoutes);
app.use("/",dashboardRoutes);
app.use("/",userRoutes);
app.use("/",bookDemoUserRoutes)
app.use("/",offerRoutes)

const port=process.env.PORT;
app.listen(3000,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})


