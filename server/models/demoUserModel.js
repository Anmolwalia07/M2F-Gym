import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const demoUser=sequelize.define("DemoUser",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    demoType:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

export default demoUser;