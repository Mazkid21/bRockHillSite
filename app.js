const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const express = require('express');
const request = require('request');
const app = express();

//EXPRESS (app) USE THIS MIDDLEWARE...PUT BEFORE ROUTES TO SO IT PROCESS FIRST
app.use(
  bodyParser.json(),
  bodyParser.urlencoded({
    extended: false
  })
);

//EXPRESS (app) START TEMPLTING ENGINE (handlebars)
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    defaultLayout: 'main'
  })
);
app.set('view engine', '.hbs');

//HOME ROUTE
app.get('/', (req, res) => {
  res.render('home', {});
});


app.get('/listing', (req, res) => {
  // API HEAD INFO WITH KEY AND SUCH
  var options = {
    method: 'GET',
    url: 'https://sparkapi.com/Reso/OData/Property',
    headers: {
      'x-sparkapi-user-agent': 'BrittanieRockhill',
      accept: 'application/json',
      authorization: process.env.API_KEY
    }
  };
  //ACTUALL API CALL
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    let data = JSON.parse(body);
    let propertyData = data.value;
    // console.log(propertyData);

    // RENDER THE HOME TEMPLATE AND PASS THE GIF DATA IN TO THE TEMPLATE
    res.render('listing', {
      property: propertyData
    });
  });
  //RENDERS home.hbs PASSES PROPERTY VARIABLE(object) TO HANDLEBARS AND CAN BE CALLED USING IMAGES TAG

});

app.get('/test', (req, res) => {
  res.render('test', {
    data: "hiii"
  });
});


//Server info
app.listen(3000, () => {
  console.log('Server (app) running on port 300');
});