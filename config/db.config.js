// mongoose
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // connect to db
    await mongoose.connect(
      "mongodb+srv://ammie:amakabless2@cluster0.oyjh4m2.mongodb.net/Portfolio?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully");
    return true;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connectDb;
