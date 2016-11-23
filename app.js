require('dotenv').config();
var express = require('express')
var app = express()
var amazon = require('amazon-product-api');
var cors = require('cors'); // Cross Origin Resource Sharing
var bodyParser = require('body-parser');
var amazon = require('./api/amazon')

app.use(cors());
app.use(bodyParser());

app.get('/search/:keyword', function(request, response){
    amazon.search( request.params.keyword ).then( function( amazonResults ){
        response.json( amazonResults );
    } );
});

app.listen(3000)
