const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  uuid :{type:String,required:true},
  name: {
    type: String,required:true
  },
  email: {
    type: String,required:true
  },
  password: {
    type: String,required:true
  },
  role: {
    type:String,
    enum:['admin','user'],
    default:'user',
  }
});
userSchema.set('timestamps',true);
module.exports = mongoose.model("user", userSchema);