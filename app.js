const express = require("express");

const app = express();

const path = require("path")

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/views"));


app.listen(3030, () => {
    console.log("Servidor funcionando")
});

app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html")); 
});



