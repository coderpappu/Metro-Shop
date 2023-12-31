// const mongoose = require("mongoose");
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile: String,
});

// module.exports =
// mongoose.model.userDBS || mongoose.model("userDBS", UserSchema);

export default mongoose.model.userDBS || mongoose.model("userDBS", UserSchema)
