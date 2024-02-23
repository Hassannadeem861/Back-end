const db = require("../modules");
const Contact = db.contacts;
const { where } = require("sequelize");
const dbName = "Authentication";
const tableName = "contact";
const contact = async (req, res) => {
    try {
        const { username, email, message } = req.body
        console.log("username, email, message :", req.body);

        if (
            !username || !email || !message
        ) {
            res.status(403);
            res.send(`required parameters missing, 
            example request body:
        {
            username: "abc username",
            email: "abc email"
            message: "abc message"
        } `);
            return;
        }

        const userExist = await Contact.findOne({ where: { email } })
        console.log("userExist :", userExist);

        if (userExist) {
            return res.status(403).json({ message: "user email already exist please try a different email" })
        }

        const contactCreated = await Contact.create({
            username,
            email,
            message
        })
        console.log("create data in database :", contactCreated);

        return res.status(200).json({
            message: "Contact form submitted successfully",
            dbName: dbName,
            tableName: tableName,
            userId: contactCreated.id,
            username: username,
        })

    } catch (error) {
        console.log("contact error :", error);
        res.status(500).json({ message: "internal server" })
    }
}

module.exports = contact









