const jwt = require('jsonwebtoken');
const Register = require('../modules/register.modle');


const authMiddleware = async (req, res, next) => {
    const token = req.header('x-access-token');
    console.log("token :", token);

    if (!token) {
        return res.status(200).json({ message: "Token not provided" })

    }


    try {
        const verifyToken = await jwt.verify(token, "Hassan_Nadeem");
        console.log("verifyToken :", verifyToken);

        const userData = await Register.findOne({ where: { email: verifyToken.email } });
        console.log("userData :", userData);

        req.user = userData
        req.token = token
        req.userId = userData.id
        next();

        // if (userData) {
        //     req.user = userData;
        //     req.token = token;
        //     req.userId = userData.id;
        // } else {
        //     return res.status(200).json({ message: "User not found" });
        // }

        // next()
    } catch (error) {
        console.log("verifyToken error:", error);
        return res.status(200).json({ message: "Unauthorized token" })

    }

}

module.exports = authMiddleware