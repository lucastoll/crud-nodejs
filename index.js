var mysql = require('mysql');
const express = require('express')
const app = express()
const port = 3000

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) => {
    const sql = "";
    db.query(sql, function(error, data, fields){
        if (error) throw error;
        res.json({
            
        })
    })
    res.send('Hello World!')
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  