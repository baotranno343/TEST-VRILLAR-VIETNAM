import { FilterRaceResults } from "../models/filter-race-results.model";
import { RaceResults } from "../models/race-results.model";
import raceResultsRepository from "../repositories/race-results.repository";
import crawlingDataService from "./crawling-data.service";

class RaceResultsService {
  async AddCrawlingDataToDatabase(): Promise<boolean> {
    await raceResultsRepository.DeleteMany();
    const listYear = await crawlingDataService.GetListYearRaceResults();
    listYear?.forEach(async (element: Number) => {
      const list = await crawlingDataService.GetData(element);
      list?.forEach(async (element2: RaceResults) => {
        await raceResultsRepository.Create(element2);
      });
    });
    return true;
  }
  async Filter(filter: FilterRaceResults): Promise<RaceResults[]> {
    return await raceResultsRepository.Filter(filter);
  }
}
export default new RaceResultsService();
