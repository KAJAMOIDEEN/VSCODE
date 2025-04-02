const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.post('/', (req, res)=>{
    const {name} = req.body;
    const {age} = req.body;
    
    res.send(`Welcome ${name} and my age is ${age}`);
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is aSuccessfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);