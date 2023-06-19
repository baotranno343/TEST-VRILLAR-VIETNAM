import express from "express";
import raceResultsController from "../controllers/race-results.controller";
const indexRouter = express.Router();

indexRouter.get("/crawling", raceResultsController.AddCrawlingDataToDatabase);
indexRouter.get("/filter", raceResultsController.Filter);

export default indexRouter;
