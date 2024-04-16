const express = require('express');
 const app = express();

let port = 8080;
app.listen(port, ()=> {
    console.log(`app is listing of this port${port}`);
})
  
app.use((req,res) => {  // yeh method har tarah ki request chahe wo get,post etc   
    // callback execute huta hai jab koi bhi request atii hai.
    console.log("request Received!");

})