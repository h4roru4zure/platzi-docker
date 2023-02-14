const express = require('express')
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient

// Connection URL
const mongoUrl = process.env.MONGO_URL || 'mongodb://db:27017/test';

app.get('/', (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send('💥Pumm Boom Flag 💥: ' + err);
    } else {
      res.send('Me conecté wa laaaa DB! 😎 tomatelo todito 1');
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`))
