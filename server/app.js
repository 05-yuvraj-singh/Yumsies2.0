const express=require("express");
const app=express();
const cors=require('cors');
const dotenv=require('dotenv')
const userRoutes = require('./routes/userRoutes');
const recipieRoutes = require('./routes/recipieRoutes');

const corsOptions = {
    origin: 'http://localhost:3000', //http://localhost:3000/
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
  };
  
  
  //middlewares
  express.json()
  app.use(cors(corsOptions));
  app.use(express.json());

//to update via form
app.use(express.urlencoded({extended: false}))
dotenv.config({path:'./config/config.env'})

// User Routes
app.use('/api/users' , userRoutes);

// Recipie Routes 
// app.use('/api/recipies', recipieRoutes);

module.exports = app;
