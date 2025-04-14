import sequelize from "./config/db.js";
import bcrypt from "bcrypt"
import {User, Membership } from "./models/association.js"
import demoUser from "./models/demoUserModel.js";
import Offer from "./models/offerModel.js";
async function syncDatabse(){
    await sequelize.sync({force:true}).then(() => {
        console.log("Database synced");
        })
        .catch((err) => {
            console.log(err);
        });
    const hashPassword=await bcrypt.hash("1234",10);
    await User.bulkCreate([
        {name:"Admin",email:"admin123@gmail.com", username: "Anmolwalia07",password:hashPassword, role:"admin"}
    ])
}

syncDatabse();