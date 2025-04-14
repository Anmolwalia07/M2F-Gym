import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Offer=sequelize.define("offer",{
    fee:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    timePeriod:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

export default Offer;