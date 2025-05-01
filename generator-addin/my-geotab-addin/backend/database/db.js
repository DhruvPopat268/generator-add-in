const mongoose = require('mongoose');

function ConnectToMongoDb () {
    mongoose.connect('mongodb://localhost:27017/GeoTabAddIn')
    .then( () => { 
        console.log("MongoDb connected successfully")
     } ) 
     .catch((error)=> {
        console.log(error)
     })
}

module.exports = ConnectToMongoDb;