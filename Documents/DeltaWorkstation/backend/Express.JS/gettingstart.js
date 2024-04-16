const express = require ('express');
const app = express();  // express ko load kr kay iss ki value ak object kay ander stroe kr late jis may buhat sare function hute hee, iss ko handle bla bla 
// server side web app   ->object
//console.dir(app);  -> object

   // app.liston ka function particular port pay listion karta rehata hai  for incoming requests kay liye
   let port = 3000; // 8080 avalible for costom servers 
   app.listen(port, ()=> {  // liston incoming api's request 
    console.log(`server is listing of port ${port}`); 
   });
    // server started and continiously listing for 
 