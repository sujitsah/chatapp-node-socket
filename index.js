/**
 * Created by dell on 6/22/2017.
 */
var express = require('express');

//app setup
var app = express();
var server = app.listen(8080,function(){
    console.log('listening to request on port 8080');
});


// static files
app.use(express.static('public'));