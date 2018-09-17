const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const express = require("express");
const request = require("request");

const app = express();
app.use(express.static(__dirname))

$('document').ready(function () {
    execute();
});

function execute() {
    var options = {
        method: 'GET',
        url: 'https://sparkapi.com/Reso/OData/Property%28%2720090207005326215634000000%27%29/Media',

        headers: {
            'postman-token': '0f80fec1-9426-50be-eab3-de75a79dd12a',
            'cache-control': 'no-cache',
            'x-sparkapi-user-agent': 'BrittanieRockhill',
            accept: 'application/json',
            authorization: 'Bearer zimfezqowbh4att7tby8gn5g'
        }
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        // WHEN DATA IS FULLY RECEIVED PARSE INTO JSON
        var parsed = JSON.parse(body);
        var data = parsed.value;

        console.log(data);

    });
}