const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogtData = require('./workoutData.json');
const communityData = require('./communityData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const workout = await Workout.bulkCreate(workoutData, {
        individualHooks: true,
        returning: true,
    });

    const community = await Community.bulkCreate(communityData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();
