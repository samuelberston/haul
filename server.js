const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, './public')));

const server = app.listen(port, console.log(`App is listening at port ${port}`));

module.exports = server;
