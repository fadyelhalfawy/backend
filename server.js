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

app.get('/tshape', (req, res) => {
    const { table, title } = req.query;
    
    let sql = `SELECT * FROM ${table} WHERE Title = '${title}'`;
    console.log(sql);
    
    
    db.query(sql, (err, data) => {
      if (err) return res.json(err.message);
      console.log(data);
      return res.json(data);
    });
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});