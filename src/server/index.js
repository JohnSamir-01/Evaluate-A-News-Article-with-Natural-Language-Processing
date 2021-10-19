const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
var path = require('path');

dotenv.config();

const apiKey = process.env.API_KEY;



// EXPRESS

const app = express()

// Cors 
const cors = require('cors');

// 

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('dist'))



app.get('/', function (req, res) {
    res.sendFile(path('dist/index.html'))
   // res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/sentiment', async(req, res) => {
 
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.url}&lang=en`);

    try {
        const data = await response.json();
        res.send(data);
      }catch (error) {
      console.log("error", error);
      }

});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})



module.exports = app;
