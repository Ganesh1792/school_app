const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userTask',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', function(){
    console.log('mongo DB connection established');
});