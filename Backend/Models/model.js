const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Please Enter Title"],
      maxLength: [50, "Title cannot exceed 50 characters"]
    },
    description: {
      type: String,
      required: [true, "Please Enter Description"],
      maxLength: [200, "Title cannot exceed 200 characters"]
    },
   thumbnail: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    video: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    }
   
  });

  module.exports = mongoose.model("User", userSchema);