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

app.get('/tshape', async (req, res) => {
    const { table, title } = req.query;
    try{
        const sql = `SELECT * FROM ${table} WHERE Title = '${title}'`;
        db.query(sql, (err, expValue) => {
        if (err) return res.status(500).json({ error: err.message });
            
        const sqlNotes = `SELECT * FROM ${table} WHERE Title = "Notes"`;
        
        db.query(sqlNotes, (err, notesValue) => {
        if (err) return res.status(500).json({ error: err.message });
    
        res.json({
            expValue,
            notesValue
              });
            });
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
    
    })
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});