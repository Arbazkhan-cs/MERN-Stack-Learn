// To access The HTMl File we have to create file into a public Directory
// like this: >public
//               index.html
//               >CSS
//                  style.css

const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

// To access the path we just have to add the absolute path of the public directory
const page = path.join(__dirname, "/public");

// now we have to use a middleware to add our html file
// the middle-ware name is `express.static(path)`, and to use that we have to use a function knoun as "app.use(link ,middle-ware)";
app.use("/static",express.static(page));  

app.get("/", (req, res)=>{
    res.send("Hello World From The Arbaz Khan");
})
app.get("/about", (req, res)=>{
    res.send("Hello World From The About Page");
})

app.listen(port, ()=>{
    console.log(`Server is Listening to the http://localhost:${port}`);
})