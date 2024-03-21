const { Sequelize, DataTypes } = require('sequelize');

const Register = (sequelize) => {
    return sequelize.define("register", {
        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    });
};

module.exports = Register;

