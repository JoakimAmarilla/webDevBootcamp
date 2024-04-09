//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

/* 
    1.conct js to the html
    2.Read the html response
    3.if true send new webpage
*/

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var authorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next){
    authorised = false;
    if( req.body["password"] === "ILoveProgramming"){
        authorised = true
    }
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  app.post("/check", (req, res) => {
    if (authorised) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.sendFile(__dirname + "/public/index.html");
      //Alternatively res.redirect("/");
    }
  });

app.listen(port, ()=>{
    console.log("Working on port: " + port)
})