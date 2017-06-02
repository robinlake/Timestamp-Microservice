var express = require('express');
var path = require('path');
const app = express()

app.get('/', function (req, res) {
  //res.render(__dirname + '/index.html')
  //res.end('Hello World')
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/:time', function (req, res) {
  if (isNaN(req.params.time)){
  var dateUnix = Date.parse(req.params.time.toString())
  console.log('request' + typeof req.params.time + isNaN(req.params.time));
  } else {
    var dateUnix = parseInt(req.params.time);
    console.log('request' +typeof req.params.time + isNaN(req.params.time));
  }
  var dateNatural =  new Date(dateUnix)
  console.log('dateNatural = ' + dateNatural);
  var months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

  var dateMonth = months[dateNatural.getMonth()];
  var dateDay = dateNatural.getDate();
  var dateYear = dateNatural.getFullYear();

  if( isNaN(dateUnix) || isNaN(dateDay)){
    res.send('Unix Timestamp: null  Natural Language: null')
  } else {
  res.send('Unix Timestamp: ' + dateUnix + ' ' + "Natural Language:" + ' ' + dateMonth + ' ' + dateDay + ', ' + dateYear)
  }
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
