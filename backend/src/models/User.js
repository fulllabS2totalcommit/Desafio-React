const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    _id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      street: { type: String, require: true },
      suite: { type: String, require: true },
      city: { type: String, require: true },
      zipcode: { type: String, require: true }
    },
    phone: String
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
