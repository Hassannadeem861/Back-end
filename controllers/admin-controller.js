const db = require("../modules");
const User = db.registers;
const Contact = db.contacts;


// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {

        const users = await User.findAll()
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
        const findSingleUser = await User.findByPk(id);
        console.log("findSingleUser", findSingleUser);
        if (findSingleUser) {
            return res.status(200).json({
                message: "Get Single User Successful",
                findSingleUser
            });
        } else {
            return res.status(404).json({
                message: `Cannot find user with id=${id}.`
            });
        }
    } catch (error) {
        next(error)
        console.log("getAllUsers error :", error);
        return res.status(500).json({
            message: "Error retrieving user with id=" + req.params.id,
            error: error.message // Include the error message in the response
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









