const express = require('express');
const app = express();
const path = require('path'); // when we start server from somewhre else and want to express find views directery we can set it cuctom by using path

const port = 3000;
 
app.set("view engine ", "ejs");
app.set("views ", path.join(__dirname, "/views")); 

app.get("/ ", (req,res) => {

    res.render("home.ejs");
})

app.get("hello" , (req, res) => {
    res.send("Hello");
})

app.listen("port" , () => {
    console.log(`server start at : ${port}`);
})