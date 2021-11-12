const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/`;

app.get("/",  (req, res) => {
    mongoose.connect(url)    
    .then(conn => {
        res.send(`Connected to MongoDB ${conn.connections[0]._connectionString}`);
      })
      .catch(err => {
        res.send(`Failed to connect to MongoDB ${err}`);
      })
});

app.listen(port, () => console.log(`App listening at http://0.0.0.0:${port}`))