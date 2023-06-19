import axios from "axios";
import * as cheerio from "cheerio";
import { RaceResults } from "../models/race-results.model";
import raceResultsSchema from "../schemas/race-results.schema";
import raceResultsRepository from "../repositories/race-results.repository";
export default new (class CrawlingDataService {
  async GetData(year: Number): Promise<RaceResults[]> {
    const path = `https://www.formula1.com/en/results.html/${year}/races.html`;
    const getPageHTML = await axios.get(path);
    const $ = cheerio.load(getPageHTML.data);
    const list: any = [];
    $(".resultsarchive-table tbody tr").each((index, element) => {
      const grandPrix: string = $(element).find("td").eq(1).text().trim();
      const date: string = $(element).find("td").eq(2).text().trim();
      const winner: string = $(element)
        .find("td")
        .eq(3)
        .find("span")
        .not("span:eq(2)")
        .text()
        ?.replace(/([A-Z])/g, " $1")
        .trim();
      const car: string = $(element).find("td").eq(4).text().trim();
      const laps: string = $(element).find("td").eq(5).text().trim();
      const time: string = $(element).find("td").eq(6).text().trim();

      const obj: RaceResults = {
        grand_prix: grandPrix,
        date: date,
        winner: winner,
        car: car,
        laps: laps,
        time: time,
      };
      list.push(obj);
    });
    return list;
  }

  async GetListYearRaceResults(): Promise<Number[]> {
    const path = "https://www.formula1.com/en/results.html";
    const getPageHTML = await axios.get(path);
    const $ = cheerio.load(getPageHTML.data);
    let listYear: Array<Number> = [];
    $(".resultsarchive-filter-wrap:first ul li").each((index, element) => {
      listYear.push(Number($(element).text().trim()));
    });
    return listYear;
  }
})();
