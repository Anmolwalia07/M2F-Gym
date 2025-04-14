import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";
import User from "./userModel.js"; // Import the User model to establish the relationship

const Membership = sequelize.define('Membership', {
    type: {
        type: DataTypes.ENUM('Silver', 'Gold', 'Platinum'),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1 // Ensure duration is at least 1
        }
    },
    durationUnit: {
        type: DataTypes.ENUM('Days', 'Months', 'Years'),
        allowNull: false
    },
    fee: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users', // References the User model
            key: 'id'
        }
    }
});


export default Membership;
