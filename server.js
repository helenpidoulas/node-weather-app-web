const express = require('express');
const app = express()

app.use(express.static('public'));
app.set('view engine', 'ejs')

const request = require('request');
const apiKey = '8a1a3cc956c204ebbbd40834bdd9dc38';
const bodyParser = require('body-parser');
// ...http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=8a1a3cc956c204ebbbd40834bdd9dc38
// ...

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})
