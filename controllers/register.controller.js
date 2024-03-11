const db = require("../modules");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { where } = require("sequelize");
const User = db.registers;



const dbName = "Authentication";
const tableName = "register";
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

        req.body.email = req.body.email.toLowerCase();


        const userEmail = await User.findOne({ where: { email } })
        console.log("userEmail :", userEmail);

        if (userEmail) {
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
        res.status(201).json({
            message: "registration successfully", databaseName: dbName,
            tableName: tableName, userId: userCreated.id, isAdmin: this.isAdmin, token

        })
    } catch (error) {
        console.log("register error :", error);
        res.status(500).json({ message: "internal server" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        console.log("email, password :", req.body);

        if (
            !email || !password
        ) {
            res.status(403);
            res.send(`Email and password are required, 
            example request body:
        {
            email: "abc email"
            password: "abc password"

        } 
        `);
            return;
        }

        req.body.email = req.body.email.toLowerCase();


        const user = await User.findOne({ where: { email } })
        console.log("login user :", user);

        if (!user) {
            return res.status(404).json({ message: "invalid username and password" });
        }


        const comparePassword = await bcrypt.compare(password, user.password)
        console.log("comparePassword :", comparePassword);


        if (!comparePassword) {
            return res.status(404).json({ message: "invalid username and password" });
        }

        const token = jwt.sign({ userId: user.id }, "Hassan_Nadeem", { expiresIn: "1h" });
        console.log("login token :", token);
        res.status(201).json({
            message: "login successfully", databaseName: dbName,
            tableName: tableName, userId: user.id, isAdmin: this.isAdmin, token
        })
    } catch (error) {
        console.log("login error :", error);
        res.status(500).json({ message: "internal server" })
    }
}


// USER LOGIC 
const userLogic = async (req, res) => {
    try {
        const userData = req.user
        console.log("userData :", userData);
        return res.status(201).json({ message: userData })
    } catch (error) {
        console.log(`error from the userlogic ${error}`);

    }

}

module.exports = {

    register,
    login,
    userLogic

}









