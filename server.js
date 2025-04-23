const express = require('express');

const db = require('./db');
const app = express();
const routes = require('./routes/index');
const cors = require('cors');
require('dotenv').config('./.env');

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.use(express.static('public'));

app.listen(5000, () => {
  console.log('app is running @http://localhost:5000');
});
