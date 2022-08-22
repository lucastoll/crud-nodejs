var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "crud-nodejs",
  password: "",
  port: 3306
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/getAllUsers', (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, function(error, data, fields){
        if (error) throw error;
        res.json({
            "status": 200,
            "message": "All users retrieven with success.",
            "data": data
        })
    })
})

app.post('/logon', (req, res) => {
  const sql = "INSERT INTO usuarios(nome, email) VALUES (?)";
  const usuario = [req.body.nome, req.body.email]

  db.query(sql, [usuario], function(error, data, fields){
    if (error) throw error;
    res.json({
        "status": 201,
        "message": "User registered with success."
    })
})
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  