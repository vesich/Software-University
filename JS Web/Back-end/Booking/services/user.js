const User = require('../models/User');

async function createUser(email, username, hashedPassword) {
    //TODO adapt properties to project requirements

    const user = new User({
        email,
        username,
        hashedPassword
    })

    await user.save();

    return user;
}

async function getUserByUsername(username) {
    const pattern = new RegExp(`^${username}$`, 'i')
    const user = await User.findOne({ username: { $regex: pattern } }).populate('bookedHotels').lean();
    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i')
    const user = await User.findOne({ email: { $regex: pattern } });
    return user;
}


//TODO add function for finding user by other properties, as specified in the project requirements

module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail
}