const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kb_itworx',
});

db.connect((err) => {
    if(err) return console.log("Error");
    console.log('MySQL Connected');
});

app.get('/nodejs', (req, res) => {
    console.log(req.query);
    
    // const { practice, title } = req.query;
    
    let sql = `SELECT * FROM nodejs WHERE Title = 'Software Engineer'`
    // let sqlTitle = `SELECT * FROM ${practice} WHERE Title = ${title}`;
    // let sql = console.log(`Enter Database... and ${practice} and ${title}`);
    
    
    db.query(sql, (err, data) => {
      if (err) return res.json(err.message);
      return res.json(data);
    });
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});