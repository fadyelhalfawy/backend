const mysql = require('mysql');
const express = require('express');
const app = express();


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kb_itworx',
});

db.connect(() => {
  console.log('MySQL Connected');
});

app.get('/advanced_analytics', (req, res) => {
    console.log(req.query);
    
    // const { practice, title } = req.query;
    
    let sqlPractice = `SELECT * FROM advanced_analytics`;
    console.log(sqlPractice);
    // let sqlTitle = `SELECT * FROM ${practice} WHERE Title = ${title}`;
    // let sql = console.log(`Enter Database... and ${practice} and ${title}`);
    
    
    db.query(sql, (err, result) => {
      if (err) return res.json('Error');
      return res.send(result);
    });
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});