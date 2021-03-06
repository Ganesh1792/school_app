require('./db/mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.apiRoutes(app);

app.listen(3500, function(){
    console.log('This project running on 3500 port')
})