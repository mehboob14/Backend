// 1. listion karna
//2. parse karna jitni bhi hamare pass http request huti hee textbased huti hee expresss in ko object may convert karta hai   // issliye kay jo bhi server hai wo in ko samjh paye  // bilkul issi tarah javascrpt ko samjhnay kay liye object may ecpress object may convert karta hai

let express = require("express");
 let app = express();  // load backend app with express utilites and functions 
 
 let port = 8080; // available custom port

 app.route("package.html");  

 app.listen(port,()=> {
    console.log(`app is listing on the port ${port}`);
 })

 app.use((req,res) => {
     console.log("Request Reciecved!");
 })
 