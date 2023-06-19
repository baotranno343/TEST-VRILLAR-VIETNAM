import raceResultsRoute from "./race-results.route";
import { Express } from "express";
export default function route(app: Express) {
  app.use("/api", raceResultsRoute);
}
