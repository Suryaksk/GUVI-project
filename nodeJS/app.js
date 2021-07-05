//import required module
const express = require("express");
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.route");
const cors = require("cors");

let corsOption = { origin: '*'}

//let dev_db_url = "mongodb://localhost:27017/userdata";
let dev_db_url = "mongodb+srv://root:ksk123@cluster0.mapyo.mongodb.net/userdata?retryWrites=true&w=majority"

mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error",console.error.bind(console,"MongoDB connection error:"));


//initialize app
const app = express();

//handle Frontend json
app.use( bodyParser.json()); //post method
app.use( bodyParser.urlencoded({extended:false})); //get method
//app.use('/', function (req, res) {
   // res.send('Hello World');
//});
app.use(cors( corsOption));

app.post('/createuser',cors(), function ( req, res){
    var userData = req.body;
    console.log('before converting - ' + JSON.stringify(userData));
   // userData = JSON.stringify(userData);
    //console.log('json converted - ' + userData); 
    db.collection('user').find({email:userData.email}).toArray().then(function(list){
        console.log(list);
        if(list.length > 0){
            res.send({code:"99999"})
        }else{
            userData._id=userData.email;
            db.collection('user').insertOne(userData);
            res.send({code:"00000"})
        }
    })
    
});

app.get('/user',cors(), function ( req, res){
    console.log(req.query); 
    var list = db.collection('user').findOne({_id:req.query.id});
    list.then(function(val){
        console.log(val)
        res.send(val);
    })
});

app.post('/login',cors(), function ( req, res){
    var userData = req.body;
    console.log('before converting -' + JSON.stringify(userData));
    var response = {
        code : "99999"
    }
    db.collection('user').find({email:userData.email}).toArray().then(function(list){

        console.log(list)
        if(list.length > 0){
            var data = list[0];
            console.log(JSON.stringify(data));
            if(data.password === userData.password){
                response = {
                    code : "00000",
                    id : data._id
                }
                
            }
        }
        res.send(response);
        
    });
});

app.put('/user',cors(), function ( req, res){
    console.log('update user'); 
    // db.collection('user').insert({})
    var data = req.body;
    console.log('data - ' + JSON.stringify(data));
    db.collection('user').updateOne({_id:data._id}, {$set:data});
    res.send({code:"00000"});
});

app.listen(8081,()=>{
    console.log("app started");
});