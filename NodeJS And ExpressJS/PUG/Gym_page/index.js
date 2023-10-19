const express = require("express");
const fs = require("fs");
const pug = require("pug");

const app = express();
const port = 8000;

// By using this method, directly we can get our data from the form so no need to import body-parser.
app.use(express.urlencoded());
app.engine("pug", pug.__express);
app.set("views", "./pug_file");
app.set("view engine", "pug");

app.get("/", (req, res)=>{

    res.render("index.pug", {
        'title': "Only Gym"
    });
})
app.post("/result", (req, res)=>{
    fs.appendFileSync("./Gym_Data/data.txt", `Name: ${req.body.name}\nAge: ${req.body.age}\nGender: ${req.body.gender}\nResident Of: ${req.body.address}\nMobile No.: ${req.body.mobileNo}\nPlan:\t${req.body.Plan}\n\n`)

    res.send("Thank You");
})

app.listen(port, ()=>{
    console.log(`Server Is Litening To The: http://localhost:${port}`);
})