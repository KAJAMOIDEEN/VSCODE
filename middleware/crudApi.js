//App.js

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
// middleware function 1
const reqFunction = (req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
};
// middleware function 2
const formDataFunction = (req, res, next) => {
    const { name: geekName } = req.body;
    if (geekName) {
        req.username = geekName;
    }
    next();
};
// middleware function 3
const userShowFunction = (req, res) => {
    const username = req.username || 'Guest';
    res.send(`<h1>Hello, ${username}!</h1>`);
};
// route handler with middleware chaining
app.get('/', reqFunction, (req, res) => {
    res.send(`
    <form method="post" action="/msg" style="margin-top: 20px;">
    <label for="name">Enter your name:</label>
    <input type="text" id="name" name="name" >
    <button type="submit">Submit</button>
    </form>
`);
});
app.post('/msg', reqFunction, formDataFunction, userShowFunction);
// Starting the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});