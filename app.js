const express = require("express");

const app = express();

const path = require("path")

app.use(express.static(__dirname + "/public"));

app.use(express.static(__dirname + "/views"));


app.listen(process.env.PORT || 3000, function () {
    console.log("Servidor corriendoen el puerto 3000")
});

app.get ("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html")); 
});



