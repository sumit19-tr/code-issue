let express = require('express');
let app = express();
let port =9344;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db ;
app.use(cors());

app.get('/',(req,res) => {
    res.send('Hii from express');
})

//get all locations
app.get('/location',(req,res)=> {
    db.collections('location').find().toArray((err,data) => {
        if(err) throw err;
        res.send(data)
    })
})

//Connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while Connecting');
    db =  client.db("restaurants");
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is Running on port ${post}`);
    })
})