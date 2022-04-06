require("dotenv").config();
const express = require("express");

const node_env = process.env.NODE_ENV || "development";

const port = process.env.PORT || 1337;

const bodyParser = require("body-parser");

const app = express();

app.use(
    bodyParser.urlencoded({
        limit: "10mb",
        parameterLimit: 100000,
        extended: true, //true
    })
);
//create application/json parser
app.use(
    bodyParser.json({
        limit: "10mb",
    })
);


//Routes
app.use(require("./routes/functions"));

app.listen(port, () => {
    let datetime = new Date();
    let message =
        "Server running on port: " +
        port +
        " Started at: " +
        datetime +
        " " +
        node_env;
    console.log(message);
});
