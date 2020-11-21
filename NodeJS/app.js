const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const cors = require('cors');
const { MONGO_URL} = require('./config');
var app = Express();
const studentRoute = require('./routes/api/student');

app.use(Express.json());
Mongoose.connect(MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(()=> console.log('MongoDB connected')).catch(err=> console.log(err));

app.use(cors());
app.listen(3000, () => {
    console.log("Listening at :3000...");
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/student',studentRoute);
