const express = require("express");
const mongoose = require("mongoose");
 
const app = express();
app.use(express.json());
 
// replace the connection string with your MongoDB URI.
mongoose.connect("mongodb://localhost:27017/users");
 
// Create a Mongoose schema for users
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
});
 
const User = mongoose.model("Userdata", userSchema);
 
app.get("/", (req, res) => {
    res.send("API testing");
});
 
app.post("/users", async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        const newUser = new User({ name, email, mobile });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
 
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
 
app.listen(3000, () => {
    console.log("App is running on port 3000");
});