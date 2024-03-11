const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/register.routes.js");
const contactRouter = require("./routes/contact.routes.js");
const adminRouter = require("./routes/admin-routes.js");

const app = express();

// const corsOptions = {
//     origin: "http://localhost:3000/",
//     methods: "POST, GET, DELETE, PUT",
//     credential: true

// };

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", authRouter)
app.use("/api/v1", contactRouter)


// let define the admin route
app.use("/api/v1/admin", adminRouter)

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hassan Nadeem." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});