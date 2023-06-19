import crawlingData from "../services/crawling-data.service";
import { NextFunction, Request, Response, response } from "express";

import apiResponse from "../core/api-reponse";
import raceResultsService from "../services/race-results.service";
import { RaceResults } from "../models/race-results.model";

class IndexController {
  async AddCrawlingDataToDatabase(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    const obj = await raceResultsService.AddCrawlingDataToDatabase();
    return apiResponse.SuccessReponse<boolean>(res, obj);
  }
  async Filter(req: Request, res: Response, next: NextFunction) {
    const result = await raceResultsService.Filter(req.query);
    return apiResponse.SuccessReponse<RaceResults[]>(res, result);
  }
}
export default new IndexController();
