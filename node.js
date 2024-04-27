//ReadFile Sync


// const fs= require("fs")

// const fileName = fs.readFileSync("file","utf-8");
// console.log(fileName);



// ReadFile Async 

// const fs= require("fs");

// fs.readFile("./file","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// WriteFile sync 

// const fs = require("fs");

// fs.writeFileSync("file","Hii");


// WriteFile Async 

// const fs = require("fs")

// fs.writeFile("./file","HelloWorld",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("File writed successfully");
//     }
// })


// Events passing 

// const EventEmitter = require("events");
// const myEmitter = new EventEmitter();


// myEmitter.on("message",(data)=>{
//     console.log(data);
// })


// myEmitter.emit("message","hello")



// session handling

// const express = require("express");
// const session = require("express-session");
// const app = express();

// app.use(session({
//     secret: "my secret id",
//     resave:false,
//     saveUninitialized:true
// }));

// const PORT = process.env.PORT||3000;

// app.listen(PORT,()=>{
//     console.log(`Server is running on http://localhost:${PORT}`);
// })


// Cookie 

// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();

// // Use the cookie-parser middleware
// app.use(cookieParser());

// // Route to set a cookie
// app.get('/set-cookie', (req, res) => {
//   // Set a cookie named "example" with the value "cookie-value"
//   res.cookie('example', 'cookie-value');

//   // Send a response
//   res.send('Cookie set!');
// });

// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });


//server without express
  

// const http = require("http");


// const server = http.createServer((req,res)=>{
//     res.writeHead(200)
//     res.end("hello")
// })

// const PORT = process.env.PORT||3000;

// server.listen(PORT,()=>console.log("Server is running"))




// Create server using express


// const express = require("express");
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello brother");
// });

// app.listen(3000,()=>console.log("server is running"))



// Set view engine 

// const express = require("express");
// const app = express();
// const path = require("path");



// app.set("view engine","ejs")
// app.set("views",path.join(__dirname,"views"))


// app.get("/",(req,res)=>{
//     res.send("My name is akbar")
// })


// app.listen(3001,()=>console.log("server is running"))





// change view file name and run code


// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"))

// app.get("/",(req,res)=>{
//     res.render("newView")
// })

// app.listen(3001,()=>console.log("Server is running"))




// query params and path params 


// const express = require("express");
// const app = express();


// app.get("/",(req,res)=>{
    
// })

// app.get("/students",(req,res)=>{
//     res.send(req.query.name)
// })

// app.get("/person/:id/:id1",(req,res)=>{

//     res.send(req.params.id+" "+req.params.id1)
// })


// app.listen(3001,()=>console.log("server is running"))




// dealing with user input (using path params)



// const express = require('express');
// const app = express();
// const port = 3000;

// const profiles = {
//   "1": { name: "Akbar" },
//   "2": { name: "Easa" },
//   "3": { name: "Ahamed" }
// };

// app.get("/profile/:id", (req, res) => {
//   const currentId = req.params.id;
//   const currentProfile = profiles[currentId];

//   if (currentProfile) {
//     res.send(`Profile of ${currentProfile.name}`);
//   } else {
//     res.status(404).send("Profile not found");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// endpoint to check wheather a number is odd or even 

// const express = require("express");
// const app = express();


// app.get("/check/:number",(req,res)=>{
//     const number = parseInt(req.params.number)

// if(isNaN(number)){
//     res.send("Please provide a valied number")
// }else{
//     const result = number %2 ===0 ? 'even': 'odd';
//     res.send(`The number ${number} is ${result}`)
// }});

// app.listen(3001,()=>console.log("Server is running"))





// error status adding on middle ware 


// const express = require("express");
// const app = express();


// app.use((err,req,res,next)=>{
//     console.error(err);
//     res.status(500).send("Something went wrong")
// })


// app.get("/",(req,res)=>{
//     res.send("HEllo")
// })

// app.listen(3001,()=>console.log("Server is running"));




// add data to env 


// const express = require("express");
// const app = express();
// require('dotenv').config(); // Load environment variables from .env file

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log("Server is running"));





//setting cors header


// const express = require("express");
// const app = express();
// const cors = require("cors")


// app.use(cors())

// app.get("/", (req, res) => {
//     res.send("Hello");
// });

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log("Server is running"));





//Api Server

// const express = require('express');
// const app = express();

// app.get("/",(req,res)=>{
//     res.json({message:"Hello sir"})
// })


// app.listen(3001,()=>console.log("server is running"))





//error handling


// const express = require("express");
// const app = express();


// app.get("/error",(req,res,next)=>{
//     const err = new Error("This is error");

//     next(err);
// })


// app.use((err,req,res,next)=>{
//     console.error(err.stack);

//     res.status(500).send("Something went wrong")
// })


// app.listen(3001,()=>console.log("server is running"))



// Run a static file 


const express = require("express");
const app = express();
const path = require("path")


// app.use(express.static(path.join(__dirname,"public")))

app.get('/user/:name',(req,res)=>{
    const user =  req.params.name
    res.send("Welcome "+user)
})
app.listen(3001,()=>console.log("server is running")) 
