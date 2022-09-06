// express
const express = require("express");

//session
const session = require("express-session");

//dotenv
require('dotenv').config()

// connect db
const connectDb = require("./config/db.config");

// home route
const homeRoute = require("./router/home");

// admin route
const adminRouter = require("./router/admin.route");


// invoke express
const app = express();

// Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(session({secret: 'ssshhhhh'}));

// Root Routes
app.use("/", homeRoute);
app.use("/admin", adminRouter);


app.use((req, res) => {
  res.status(404).send("404");
});

// PORT
const port = 3000;

app.listen(port, async () => {
  try {
    console.log("app is running");
    
    // invoke connectDb
    await connectDb();
  
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});
