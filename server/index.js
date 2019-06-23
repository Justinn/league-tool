const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const { db } = require('./db');
const PORT = 43594;

const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')) 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

db.sync().then(() => {
  console.log('db synced');
  app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
});
