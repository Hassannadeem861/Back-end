const db = require("../modules");
const User = db.registers;
const Contact = db.contacts;
const dbName = "Authentication";
const tableName = "users";

// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {

        const users = await User.findAll({}, { password: 0 })
        if (!users || users === 0) {
            return res.status(404).json({
                message: "Users not found",
            })
        }
        console.log("users :", users);
        return res.status(200).json({
            message: "Get All Users Successfull",
            users
        })



    } catch (error) {
        next(error)
        console.log("getAllUsers error :", error);
        res.status(500).json({ message: "internal server" })
    }
}
// getSingleUser
const getSingleUser = async (req, res) => {
    try {

        const id = req.params.id;
        console.log("getSingleUser id:", id);
        const findSingleUser
        User.findByPk(id)
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `Cannot find admin with id=${id}.`
                    });
                }
            })

        return res.status(200).json({
            message: "Get Single User Successfull",
            findSingleUser
        })
    } catch (error) {
        next(error)
        console.log("getAllUsers error :", error);
        res.status(500).send({
            message: "Error retrieving admin with id=" + id
        });
    }
}


// GET ALL CONTACTS
const getAllContacts = async (req, res) => {
    try {

        const contacts = await Contact.findAll()
        if (!contacts || contacts === 0) {
            return res.status(404).json({
                message: "Contacts not found",
            })
        }
        console.log("contacts :", contacts);
        return res.status(200).json({
            message: "Get All Users Successfull",
            contacts
        })
    } catch (error) {
        next(error)
        console.log("getAllContacts error :", error);
        res.status(500).json({ message: "internal server" })
    }
}

module.exports = {
    getAllUsers,
    getSingleUser,
    getAllContacts

}








