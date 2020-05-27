//Create table for users

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/users.sqlite'
});

class User extends Model {}

exports.user = {
    initUser: initUser,
    userClass: User
};

async function initUser() {
    return new Promise((resolve) => {
        User.init({
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            }
        }, { sequelize, modelName: 'users' });
        resolve();
    });
}