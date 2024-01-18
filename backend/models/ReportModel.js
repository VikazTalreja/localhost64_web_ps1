import mongoose, { Schema } from "mongoose";

const reportModel = new Schema({
  reportTitle: {
    type: String,
    required: true,
  },
  reportAuthor: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  reportContent: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Report", reportModel);
