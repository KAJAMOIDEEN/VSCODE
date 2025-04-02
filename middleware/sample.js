const express = require("express");
const app = express();

const port = process.env.port || 3000;
// Filename - index.js

app.get(
    "/",
    (req, res, next) => {
        console.log("hello");
        next();
    },
    (req, res) => {
        res.send(
            `<div>
                <h2>Welcome to GeeksforGeeks</h2>
                <h5>Tutorial on Middleware</h5>
            </div>`
        );
    }
);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
