const express = require('express');
//const apiKey = '8a1a3cc956c204ebbbd40834bdd9dc38';
const apiKey = '8a1a3cc956c204ebbbd40834bdd9dc38';
const city = 'Sydney';
const weather = 'Todays weather';


const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
