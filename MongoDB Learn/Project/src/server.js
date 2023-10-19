const express = require('express');
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;

app.use(express.urlencoded());

// Adding Static Files
const staticFile = path.join(__dirname, "../static");
app.use(express.static(staticFile));

// Adding our view engine
app.set("views", "../views");
app.set("view engine", "hbs");

// Partial Tempeletes
const partial = path.join(__dirname, "../tempelate")
hbs.registerPartials(partial);


// Connecting With Database
mongoose.connect("mongodb://127.0.0.1:27017/login")
.then(()=>{
    console.log("Connected...");
})
.catch((err)=>{
    console.log(err);
});

// Validating Schema
const loginSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Now Creating our Model
const SignUp = mongoose.model("SignUp", loginSchema);

app.get("/", (req, res)=>{
    res.render("index.hbs");
})

app.post("/about", (req, res)=>{
    const extractData = req.body;
    const getData = async ()=>{
        try{
            // To add data
            // const result = await SignUp.insertMany([extractData]);

            // To check data that is this data is in the database or not
            const find = await SignUp.find({
                $and:
                [{name: extractData.name}, {email: extractData.email}]
            });
            
            if(result.length == 0)
                res.send("Invalid User Id and Email");

            else{
                res.send("Data Extracted");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    getData();
})

app.listen(port, ()=>{
    console.log(`The Server Is Listening at = http://localhost:${port}`);
})