const express = require('express'); // express web app instance

const body_parser = require('body-parser'); // parse request body to json

const path = require('path'); // for File IO

// make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const field_route = require('./routes/field/clients') // for field routing
const api_route = require('./routes/api'); // for api routing

const app = express();

app.set('view engine', 'pug'); // setting the view engine for field routes

 // cutting the path to public/styles folder for style.css file
app.use('/css', express.static('public/styles'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api_route); // API routes
app.use('/', field_route); // field routes

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));