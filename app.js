const express = require("express");
const app = express();
var plays_obj = {};

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.argv[2],
  database: "db_playbook"
});

/* Get plays list from database */
con.connect(function(err) {
  if (process.argv[2] ==undefined) {
    console.log("You must indicate the password as a console argument. Example: node app.js mypassword");
    process.exit();
  }
  if (err) throw err;
  con.query("SELECT * FROM plays", function (err, result, fields) {
    if (err) throw err;
    plays_obj = result;
  });
});

app.get('/ajaxcall', function(req, res){
	res.send(plays_obj);
});

/* Routes */
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.render("index.html")
});

app.get("/login", (req, res) => {
	res.end("Esta es la página de login");
});

app.get("*", (req, res) => {
	res.end("Página no existe");
});


app.listen(8080);

