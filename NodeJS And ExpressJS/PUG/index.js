const express = require("express");
const pug = require('pug');
const port = 8000;
const app = express();

// This is how we add template engine
app.engine('pug', pug.__express);

// Setting the path for the pug file, By default the path will be views
app.set('views', './pug_file');

// Setting the Veiw engine for the pug.
app.set('view engine', 'pug');

app.get("/", (req, res)=>{
    res.render("index.pug"); // now by render() function we are accessing the pug file.
})

app.listen(port, ()=>{
    console.log(`The Server IS Litening At: http://localhost:${port}`);
})