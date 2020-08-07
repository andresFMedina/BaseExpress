const mongoose = require('mongoose');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

module.exports = {
    login: async (body, next) => {
        try {
            return User.findOne({ name: body.name }, async (error, userDB) => {
                if (error) {
                    next(error);
                }

                if (!userDB) {
                    return null;
                }

                const correctPassword = bcrypt.compare(body.password, userDB.password)

                if (!correctPassword) {
                    return null;
                }

                console.log(userDB);                

                return userDB;

            });
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