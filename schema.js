import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String,
  nameId: {
    type: String,
    required: true,
  },
});

export const Person = mongoose.model("Person", personSchema);
