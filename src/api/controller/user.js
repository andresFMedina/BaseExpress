const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async (body) => {
        const user = new User({
            _id: new mongoose.Types.ObjectId(),
            name: body.name,
            password: bcrypt.hashSync(body.password, 10)
        });
        try {
            const newUserEntry = await user.save();
            return newUserEntry;
        } catch (error) {
            throw error;
        }
    },

    getUser: async (id) => {
        try {
            const user = await User.findById(id);
            return user;
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            return users = User.find({});
        } catch (error) {
            throw error;
        }
    }
}