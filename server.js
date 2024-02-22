const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/register.routes.js");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", authRouter)

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Hassan Nadeem." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});