const express= require('express'); //to start server
const cors = require( 'cors')
const app = express(); //to start server
const PORT = 8000; //to start server
const DB = "exercises";

//Initialize middleware to use postman
app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }) ); //to start server

//Connected to Database using mongoose
require("./config/mongoose.config")(DB)

// Import routes in server.js file after database connects and controllers are completed
require("./routes/exercise.route")(app) //route.js file in route folder also app needs to be passed in routes to execute function

//To start server
app.listen(PORT, () => console.log(`🙌🙌 server running on ${PORT}`));