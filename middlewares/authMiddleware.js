const jwt = require('jsonwebtoken');
const db = require("../modules");
const User = db.registers;

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    console.log("token :", token);

    if (!token) {
        res.status(401).json({ message: "Not token provided" });
    }

    try {
        const verifyToken = await jwt.verify(token, "Hassan_Nadeem");
        console.log("verifyToken :", verifyToken);

        const userData = await User.findOne({ where: { email: verifyToken.email } })
        console.log("userData :", userData);

        req.user = userData
        req.token = token
        req.userId = userData.id

        next()
    } catch (error) {
        console.log("verifyToken error :", error);
        res.status(401).json({ message: "Unauthorized invalid token" });

    }
}



module.exports = authMiddleware