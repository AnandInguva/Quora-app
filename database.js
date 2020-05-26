//Create table for users

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './Data/users.sqlite'
});

try {
    sequelize.authenticate();
    console.log(`Connection established`);
} catch (error) {
    console.log('Unable to connect to the database, error is ' + error);
}

class User extends Model {}
User.init({
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false }
});

exports.User = User;