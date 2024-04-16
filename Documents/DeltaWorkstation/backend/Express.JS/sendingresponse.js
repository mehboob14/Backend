const express = require('express');
const app = express();
let port = 3000;
 
app.listen(port, ()=> {
    console.log(`server starting at this port ${port}`);
})

app.use((req,res) => {
 //   console.log(req); // lot of properties 
    console.log("request has been Recieved!");
  //  res.send("this is response!");  // see Express documentation 
 
 /*   res.send( {
        name: "Mehboob",
        color: "Red",
        rollNo: 12,
    }) */

    let code = "<h1> About's Me: </h1> <ul> <li> FullStack Developer </li> <li> DSA Enthusiast </li> </ul>";
    res.send(code);

})