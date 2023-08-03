
const express = require('express');
	

const app = express();

PORT = 4000;
	

app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
  });
  


app.listen(4000, function() {
    console.log('Listening on port 4000');
});