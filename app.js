const path = require('path');
const express = require("express");
const app = express();
const companydata = require('./model/companydata');


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>hello world from the express</h1>");
});

app.get("/about-us", (req, res) => {
    res.render('index');
});

app.get("/companies", (req, res) => {
    res.json(companydata);
});

app.post("/companies", (req, res) => {
    const addcompany = {
        id : req.body.id,
        name : req.body.name
    }
    companydata.push(addcompany);
    res.json(addcompany);
});

app.put("/companies/:id", (req, res) =>{
    let id = req.params.id;
    let name = req.body.name;
    let index = companydata.findIndex((companydatas) => {
        return (companydatas.id == id);
    });

    if(index >= 0){
        let comp = companydata[index];
        comp.name = name
        res.json(comp)
    }

    else{
        res.status(404)
        res.end()
    }
});

app.delete("/companies/:id",(req, res) => {
    let id = req.params.id;
    let index = companydata.findIndex((companydatas) => {
        return (companydatas.id == id);
    });

    if(index >= 0){
      let comp = companydata[index]
      companydata.splice(index,1 )
      res.json(comp)
    }
    else{
        res.status(404);
        res.end();
    } 
});

app.listen(3000, () => {
    console.log("listening the port at 8000");
});