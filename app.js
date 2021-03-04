const path = require('path');
const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("<h1>hello world from the express</h1>");
});

app.get("/about-us", (req, res) => {
    res.render('index');
});

app.get("/companies", (req, res) => {
    res.send([
    {
    "id" : "123123134556",
    "name" : "TalkValley LLC"
    },
    {
        "id": "123312321344",
        "name" : "Google"
    },
    {
       "id": "132345344565",
       "name" : "TCS" 
    },
]);
});

app.listen(8000, () => {
    console.log("listening the port at 8000");
});