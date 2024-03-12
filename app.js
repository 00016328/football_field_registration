// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const field_route = require('./routes/field/clients') // for field routing
const api_route = require('./routes/api'); // for api routing

const app = express();

// Set the view engine for field routes
app.set('view engine', 'pug');

app.use('/css', express.static('public/styles'))
app.use('/js', express.static('public/js'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // API routes
app.use('/', field_route); // field routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
