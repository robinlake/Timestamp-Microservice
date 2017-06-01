var express = require('express');
var path = require('path');
const app = express()

app.get('/', function (req, res) {
  //res.render(__dirname + '/index.html')
  //res.end('Hello World')
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:time', function (req, res) {
  res.send('Your input was: ' + req.params.time + dateUnix)
  var dateUnix = Date.parse(req.params.time)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
