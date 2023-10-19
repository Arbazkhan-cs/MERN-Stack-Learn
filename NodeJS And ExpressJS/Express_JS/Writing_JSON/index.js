const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200).send({
        id: "983647",
        author: "Arbaz Khan",
        discription: "By Using {} Curly braces we can wirte Object But in web site it will automaticaly converted into json"
    })
})
app.get("/array", (req, res)=>{
    res.send([
        { //index 0
            id: "8978742",
            author: "Arbaz Khan",
            discription: "By using [{}] we can create array of object which will automaticaly converted into array of json"
        },
        
        { //index 1
            id: "989843",
            author: "Arbaz Khan",
            discription: "By using comma we can increase th length of the array object"
        }
        
    ])
})
app.get("/json", (req, res)=>{
    res.json([{ //index 0
        id: "89983",
        author: "Arbaz Khan",
        discription: "We can create json file also by res.json()",
        difference: "The difference between .json and .send is that .json also converts unvalid objects types such as undefinde or null into json"
    }])
})

app.listen(8000, ()=>{
    console.log("Listening To The Port 8000");
})