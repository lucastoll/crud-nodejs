var mysql = require('mysql');
const express = require('express')
const cors = require('cors');

const app = express()
const port = 3006

app.use(express.json())
app.use(cors())


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

app.get('/getJokes', (req, res) => {
    const sql = "SELECT * FROM piadas";
    db.query(sql, function(error, data, fields){
        if (error) throw error;
        res.json({
            "status": 200,
            "message": "All users retrieven with success.",
            "data": data
        })
    })
})


app.post('/createJoke', (req, res) => {
  const sql = "INSERT INTO piadas(titulo, piada, autor, likes, dislikes) VALUES (?)";
  const { titulo } = req.body; 
  const joke = [req.body.titulo, req.body.piada, req.body.autor, req.body.likes, req.body.dislikes];

  db.query(sql, [joke], function(error, data, fields){
    //if (error) throw error;
    res.json({
        "status": 201,
        "message": "Joke registered with success."
    })
})
})
 
app.put('/updateJoke', (req, res) => {
  const updateValues = [req.body.attributeName, req.body.attributeValue, req.body.id]
  const sql = `UPDATE piadas SET ${updateValues[0]}='${updateValues[1]}' WHERE id=${updateValues[2]}`;

  db.query(sql, [updateValues], function(error, data, fields){
    if (error) throw error;
    res.json({
        "status": 200,
        "message": "Joke updated with success."
    })
})
})

app.delete('/deleteJoke/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM piadas WHERE id=?';

  db.query(sql, [id], function(error, data, fields){
    if (error) throw error;
    res.json({
        "status": 200,
        "message": "Joke deleted with success."
    })
})
}) 
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  