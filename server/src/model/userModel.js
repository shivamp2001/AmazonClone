const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    phoneno: { type: String },
    password: { type: String },
    repassword: { type: String },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
