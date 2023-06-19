import mongoose from "mongoose";
const { Schema } = mongoose;

const raceResultsSchema = new Schema({
  grand_prix: String,
  date: String,
  winner: String,
  car: String,
  laps: String,
  time: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: null },
  is_deleted: { type: Boolean, default: false },
});
export default mongoose.model("race-results", raceResultsSchema);
