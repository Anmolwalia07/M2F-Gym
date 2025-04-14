import User from './userModel.js';
import Membership from './Membership.js';

// Set up associations after both models are initialized
Membership.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Membership, { foreignKey: 'userId' });

export { User, Membership };
