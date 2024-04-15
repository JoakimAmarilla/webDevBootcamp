import express from "express";
const app = express();
const port = 3000;
const today = new Date();
const day = today.getDay();

app.get("/", (req, res)=>{
    let dayTipe = "a weekday";
    let advice = "it's time to work hard!.";

    if(day === 0 || day === 6){
        dayTipe = "a weekend";
        advice = "it's time to get fun!.";
    }


    res.render("view.ejs", {
        dayType: dayTipe,
        advice: advice,
    });
})


app.listen(port, ()=>{
    console.log('working on port: ${port}.' + port)
})