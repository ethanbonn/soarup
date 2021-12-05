import type { User } from "../types/models";
import mongoose, { Schema, model } from "mongoose";

// Schema corresponding to the document interface.
const schema = new Schema<User>({
  _id: { type: String, required: true },
  email: { type: String, required: true },
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  profilePicture: { type: String, required: false },
  jobTitle: { type: String, required: false },
  userDescription: { type: String, required: false },
  links: { type: [String], required: false },
  interests: { type: [String], required: false },
});

// Create and export the model.
export default mongoose.models.User ?? model<User>("User", schema);
