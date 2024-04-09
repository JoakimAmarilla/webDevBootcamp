import express from "express";
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Hello world!")
})

app.get("/", (req,res)=> {
    res.send("hello world!")
    console.log(req.rawHeaders)
})