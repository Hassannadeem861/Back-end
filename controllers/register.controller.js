const db = require("../modules");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require("sequelize");
const User = db.registers;




const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        console.log("username, email, password :", req.body);

        if (
            !username || !email || !password
        ) {
            res.status(403);
            res.send(`required parameters missing, 
            example request body:
        {
            username: "abc username",
            email: "abc email"
            password: "abc password"
        } `);
            return;
        }

        const userExist = await User.findOne({ where: { email } })
        console.log("userExist :", userExist);

        if (userExist) {
            return res.status(403).json({ message: "user email already exist please try a different email" })
        }

        const saltRounds = 10;
        const passwordConvertToHash = await bcrypt.hash(password, saltRounds)
        console.log("passwordConvertToHash :", passwordConvertToHash);

        const userCreated = await User.create({
            username,
            email,
            password: passwordConvertToHash
        })
        console.log("create data in database :", userCreated);


        const token = jwt.sign({ userId: userCreated.id }, "Hassan_Nadeem", { expiresIn: "1h" });
        console.log("register token :", token);
        res.status(201).json({ message: "registration successfully", userId: userCreated.id, token })
    } catch (error) {
        console.log("register error :", error);
        res.status(403).json({ message: "internal server" })
    }
}

module.exports = register









