// mongoose
const { model, Schema } = require("mongoose");

// init admin schema
const review = new Schema({
  Name:String,
  Email: String,
  Phone: Number,
  Message: String
})

// init admin model
const AdminModel = model("Review", review);

// export admin model
module.exports = AdminModel;
