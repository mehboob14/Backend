const express = require('express');
 const app = express();

let port = 8080;
app.listen(port, ()=> {
    console.log(`app is listing of this port${port}`);
});

app.get("/search", (req,res) =>{
   // console.log(req.query);
   let {q} = req.query;
   if(!q){
    res.send("<h1>nothing Searched!!</h1>");
   }
   let code = `<h1> Results for Query: ${q}</h1>`;
   res.send(code);
})