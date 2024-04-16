const express = require('express');
 const app = express();

let port = 8080;
app.listen(port, ()=> {
    console.log(`app is listing of this port${port}`);
})
app.get("/", ( req, res) => {
     res.send("Hi , root path!");
});

app.get("/:username/:id", (req,res) => {
//console.log(req.params);
let {username,id} = req.params;
let code = ` <h1>welcome to the page of @${username} </h1>`;
 res.send( code);
  res.send("parameters");
})