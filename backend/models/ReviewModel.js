import mongoose, { Schema } from "mongoose";

const reviewModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  content: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  business: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Review", reviewModel);
