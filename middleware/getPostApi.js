// Requiring module  
const express = require("express");  
  
// Creating express app object  
const app = express();  
  
app.post("/check",(req,res,next)=>{ 
  res.send("This is the post request") 
  next() 
}) 
  
app.get("/gfg",(req,res,next)=>{ 
  res.send("This is the get request") 
  res.end() 
}) 
  
// Server setup  
app.listen(3000, () => {  
  console.log("Server is Running");  
})