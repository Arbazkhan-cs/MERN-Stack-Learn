const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();
const port = 8000;

const partial = path.join(__dirname, "../templates");
app.set('veiw engine', 'hbs');
hbs.registerPartials(partial);

app.get("/", (req, res)=>{
    res.render("index.hbs");
})

app.get("/about", (req, res)=>{
    res.render("about.hbs");
})

app.get("*", (req, res)=>{
    res.render('404.hbs', {
        content: "404 Page Not Found"
    });
})

app.listen(port, ()=>{
    console.log(`listening to the Server = http://localhost:${port}`);
})