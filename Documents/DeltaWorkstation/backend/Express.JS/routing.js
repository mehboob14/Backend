//  application section of documentaions diff -> get,post,put etc path,

const express = require('express');
const app = express();

let port = 3000;
app.listen(port, () => {
     console.log( "listing on this port : ")
});
//path and callback 
app.get("/", (req,res)=>{
    res.send("You connected to root path!");
})
app.get("/about", ( req,res) => {
    res.send( " you about section!");
});
app.get("/contact", (req,res) => {
    res.send("03008052588");
})
app.get("*", ( req, res) => {
     res.send("path does't exits!");  // for custom res for invalid path
}) // you send a response request to this path
app.post("/home", (req,res) => {
     res.send("you send post request!");
})
