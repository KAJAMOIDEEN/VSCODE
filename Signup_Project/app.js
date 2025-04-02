var express=require("express"); 
const { MongoClient } = require('mongodb');
var bodyParser=require("body-parser"); 
const PORT = 3000;
const path = require('path')
const mongoose = require('mongoose'); 
const { urlToHttpOptions } = require("url");
mongoose.connect('mongodb://localhost:27017/users'); 
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
	console.log("connection succeeded"); 
})


const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('login');
});
app.get('/register', (req, res) => {
    res.render('index');
});

  app.get("/view", async (req, res) => {
	try {
		await client.connect();
		const db = client.db('users');
		const collection = db.collection('details');
		
		// Find the first document in the collection
		const users = await collection.find().toArray();
	
		return res.render('view',{users});
	  } 
	  catch(err){
		console.log(err);
	  }
	  finally {
		// Close the database connection when finished or an error occurs
		await client.close();
	  }
});

app.post("/sign_in", async (req, res) => {
	try {
        // check if the user exists 
		await client.connect();
		const db = client.db('users');
		const collection = db.collection('details');
        const user = await collection.findOne({ name: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password == user.password;
          if (result) {
            res.render('signup_success');
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
	});

app.post('/sign_up',  (req, res)=>{
	var name = req.body.name; 
	var email =req.body.email; 
	var pass = req.body.password; 
	var phone =req.body.phone; 

	var data = { 
		"name": name, 
		"email":email, 
		"password":pass, 
		"phone":phone 
	} 
db.collection('details').insertOne(data,function(err, collection){ 
		if (err) throw err; 
		console.log("Record inserted Successfully"); 
			
	}); 
		
	return res.render('login');
}) 


app.get('/home', (req, res)=>{
    res.render('index')
});


app.get('/signup_success', (req, res)=>{
    res.render('signup_success')
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
