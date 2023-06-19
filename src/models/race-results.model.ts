import { ObjectId, Types } from "mongoose";

export interface RaceResults {
  _id?: Types.ObjectId;
  grand_prix?: string;
  date?: string;
  winner?: string;
  car?: string;
  laps?: string;
  time?: String;
  created_at?: Date;
  updated_at?: Date;
  is_deleted?: boolean;
}
