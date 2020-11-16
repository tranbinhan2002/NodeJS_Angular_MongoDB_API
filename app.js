const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");
const { MONGO_URL} = require('./config');
var app = Express();
const studentRoute = require('./routes/api/student');

app.use(Express.json());
Mongoose.connect(MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology :true
}).then(()=> console.log('MongoDB connected')).catch(err=> console.log(err));


app.listen(3000, () => {
    console.log("Listening at :3000...");
});

app.use('/api/student',studentRoute);
