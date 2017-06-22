/**
 * Created by dell on 6/22/2017.
 */
//make connection
var socket = io.connect('http://localhost:8080');

//variable assign
var message=document.getElementById('message'),
    handle=document.getElementById('handle'),
    btn=document.getElementById('button'),
    output=document.getElementById('output'),
    feedback = document.getElementById('feedback');



// event listener
 btn.addEventListener('click',function(){
     socket.emit('chat',{
         message: message.value,
         handle: handle.value
     });
    
 });
 
 message.addEventListener('keypress',function () {
    socket.emit('typing',handle.value);
 });

 
 //listening event
 
 socket.on('chat',function(data){
     output.innerHTML+= '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';

     
 });

 //listening for typing

 socket.on('typing',function (data) {
     feedback.innerHTML = '<p><em>' + data + ' is typing a message.... </em></p>';
 });