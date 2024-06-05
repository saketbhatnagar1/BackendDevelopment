//creating data models schemas::

import mongoose from "mongoose";

//creating a new schema:
const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//creates a new schema for mongoose using model("name",schema)
export const User = mongoose.model("User", userschema);
