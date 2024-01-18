import mongoose, { Schema } from "mongoose";

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
  aadhar_no: {
    type: String,
    required: true,
  },
  owner_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Business", businessModel);
