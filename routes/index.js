var express = require('express');
var router = express.Router();
var net = require('net');
var HOST = '192.168.1.17';
var PORT = 1337;
var client = new net.Socket(); 
var weight = ''

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/weight', function(req, res){
    client.connect(PORT, HOST, function() {
        console.log('CONNECTED TO: ' + HOST + ':' + PORT);
        client.on('data', function(data) {
            weight = data.toString;
            res.json(weight);
            //res.toJson(weight);
            //console.log('DATA: ' + weight);
            //client.destroy();
        })
        //client.on('close', function() {
        //console.log('Connection closed');
        //});
    })
    res.json(weight);
});


module.exports = router;
