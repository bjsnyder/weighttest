var net = require('net');
var HOST = '192.168.1.17';
var PORT = 1337;
var client = new net.Socket(); 
var weight = ''

client.connect(PORT, HOST, function() {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    client.on('data', function(data) {
        weight = data;
        //console.log('DATA: ' + weight);
        //client.destroy();
    })
    //client.on('close', function() {
    //console.log('Connection closed');
    //});
});
console.log('1'+weight);