import mongoose from "mongoose";

import mongooseSequence from "mongoose-sequence";

const autoIncrement = mongooseSequence(mongoose);

const opts = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
};

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    class: {
      type:String
    },
    type: {
      type: Number,
      default: 1,
    },
    photo: {
      type:String
    },
    departement: {
      type:String
    },
    email_verified_at: {
      type: Date,
    },
  },
  opts
);

userSchema.plugin(autoIncrement, { inc_field: "id" });

const User = mongoose.model("User", userSchema);

export default User;
