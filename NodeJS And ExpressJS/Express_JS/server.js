const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get("/style.css", (req, res)=>{
    res.sendFile(__dirname+"/style.css");
})
app.post("/sum.html", (req, res)=>{    
    let name = req.body.fname;
    let num1 = Number(req.body.v1);
    let num2 = Number(req.body.v2);
    let Sum  = num1+num2;

    res.send(`Thankyou ${name}, Your Sum is = ${Sum}`);
})


app.listen(5000, ()=>{
    console.log("Server Is Started At Port: 5000");
})