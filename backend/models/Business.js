import mongoose from "mongoose";

const businessModel = new Schema({
  business_name: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  gst_in: {
    type: String,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
});
