const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();
const port = 8000;

const file = path.join(__dirname,"pug_file")
app.engine('pug', pug.__express);
app.set('views', file);
app.set('view engine', 'pug');

app.get("/", (req, res)=>{
    res.render("index.pug");
})

app.listen(port, ()=>{
    console.log(`Server Is Started On: http://localhost:${port}`);
})
