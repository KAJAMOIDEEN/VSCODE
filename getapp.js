const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/bulb', (req, res)=>{
    res.sendFile(path.join(__dirname,'ONbulb.jpg'));
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);