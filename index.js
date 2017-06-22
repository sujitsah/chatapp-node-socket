/**
 * Created by dell on 6/22/2017.
 */

var express = require('express');
var socket = require('socket.io');
//app setup
var app = express();
var server = app.listen(8080,function(){
    console.log('listening to request on port 8080');
});


// static files
app.use(express.static('public'));

//socket set up
var io = socket(server);
io.on('connection',function(socket){
    console.log('made socket connection',socket.id);
});
