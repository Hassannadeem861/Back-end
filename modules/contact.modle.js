
const { Sequelize, DataTypes } = require('sequelize');
const Contact = (sequelize) => {
    return sequelize.define("contact", {
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
        message: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
};

module.exports = Contact;















// module.exports = (sequelize, Sequelize) => {
//     const Tutorial = sequelize.define("tutorial", {
//         title: {
//             type: Sequelize.STRING
//         },
//         description: {
//             type: Sequelize.STRING
//         },
//         published: {
//             type: Sequelize.BOOLEAN
//         }
//     });

//     return Tutorial;
// };

