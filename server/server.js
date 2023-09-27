const app = require("./app.js");

const connectDB = require("./config/database.js");

// const {getRecepies,getOneRecepie , postRecepie, searchRecepie } = require("./controllers/recepieController.js");



const port = process.env.PORT;

//connection
connectDB();

//get single recepie
// app.get("/recepie/:id", getOneRecepie);

//get all recepies
// app.get("/recepies/all", getRecepies);


//post product into database
// app.post("/addrecepie",postRecepie);


//search in db
// app.get("/findrecepie", searchRecepie);


app.listen(port, () => {
  console.log(`APP RUNNING ON PORT ${port} perfectly`);
});
