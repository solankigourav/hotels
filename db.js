const mongoose = require ('mongoose');


// define the mongodb connection url
const mongoURL ='mongodb://localhost:27017/hotels';

//set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

//get the default connection 
//mongoose maintains a default connection object represting the mongoDB connection
const db = mongoose.connection;

//define event listeners for the database connection
db.on('connected',()=> {
    console.log('connected to the mongoDB server');
}); 

db.on('error',()=> {
    console.log('error connecting to the mongoDB server');
}); 

db.on('disconnected',()=> {
    console.log('Disconnected to the mongoDB server');
});

//export 
module.exports = db;