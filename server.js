const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const path = require('path')

const PORT = process.env.PORT || 3000;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'sqlPr0gress!',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

// Query database
const DELETE_QUERY = `DELETE FROM movies WHERE id = ?`
const INSERT_QUERY = '';
const SELECT_QUERY = 'SELECT * FROM movies.name =?';

let deletedRow;
let movie_id;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Query database
app.get('/api/movies', (req, res)=> {
db.query('SELECT * FROM movies', (err, results) => {
  if (err) {
    console.log(err);
  }
  console.log(results);
  return results;
});
});


app.post('/api/add-movie', (req, res)=> {
db.query('INSERT INTO movies (name) values (?)', req.body.name, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
});

app.post('/api/update-review:id', (req, res)=> {
db.query('UPDATE reviews SET review = ? WHERE id =?', req.body.review, res.body.id, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
})


app.delete('/api/movie/:id', (req, res)=> {
  db.query(DELETE_QUERY, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
