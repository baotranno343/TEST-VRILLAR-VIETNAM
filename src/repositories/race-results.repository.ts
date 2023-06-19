import { empty } from "cheerio/lib/api/manipulation";
import { FilterRaceResults } from "../models/filter-race-results.model";
import { RaceResults } from "../models/race-results.model";
import raceResultsSchema from "../schemas/race-results.schema";

class RaceResultsReposistory {
  constructor() {}
  async Create(obj: RaceResults): Promise<boolean> {
    const data = new raceResultsSchema(obj);
    await data.save();
    return true;
  }
  async DeleteMany(): Promise<boolean> {
    await raceResultsSchema.deleteMany();
    return true;
  }
  async Filter(filter: FilterRaceResults): Promise<RaceResults[]> {
    let find: object = {};
    let query: any = [];

    if (filter.car != undefined && filter.car != "")
      query.push({ car: { $regex: ".*" + filter.car + ".*" } });
    if (filter.winner != undefined && filter.winner != "")
      query.push({ winner: { $regex: ".*" + filter.winner + ".*" } });
    if (filter.grand_prix != undefined && filter.grand_prix != "")
      query.push({ grand_prix: { $regex: ".*" + filter.grand_prix + ".*" } });
    if (filter.date != undefined && filter.date != "")
      query.push({ date: { $regex: ".*" + filter.date + ".*" } });
    if (filter.time != undefined && filter.time != "")
      query.push({ time: { $regex: ".*" + filter.time + ".*" } });

    if (query.length != 0) find = { $and: query };

    const list = await raceResultsSchema.find(find).exec();

    return list;
  }
}
export default new RaceResultsReposistory();
