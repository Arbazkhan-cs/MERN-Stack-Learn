// Routing is nothing but it is a process of getting the request of the user and sending him a response.
const express = require('express');
const app = express();
const port = 5000;

// To do it we uses get method.
// In get method there are two parameters: (i)URL request, (i)CallBack Function
app.get("/", (req, res)=>{
    res.status(200).send("Welcome To My Home Page");
})
app.get("/about", (req, res)=>{
    res.status(200).send("Welcome to my about Page");
})
app.get("/contact", (req, res)=>{
    res.status(200).send("Welcome to my conatct page");
})
app.get("/temp", (req, res)=>{
    res.status(404).sendFile("Page Not Found");
})

app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
})