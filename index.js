const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

//Import Routes
const authRoute = require('./routes/auth');
const tutorRoute = require('./routes/tutor')

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT , 
{ useNewUrlParser: true },
() => console.log("Connected to DB!"));

//Middleware
app.use(express.json());


//Routes Middleware
app.use('/api/user', authRoute);
app.use('/api/tutor', tutorRoute);

app.listen(3000, ()=> console.log("Server Up and running!"));

