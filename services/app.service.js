import data from "../data.json" assert { type: "json" };
import * as fs from "fs";
import { mainapp } from "../utils/is_exist.js";
import path from 'path'
import {fileURLToPath} from 'url';

class AppService {
  technologies = data;
  filteredTechnologies;
  __filename;
  __dirname 
  filtePath;

  constructor() {
    this.__filename = fileURLToPath(import.meta.url);
    this.__dirname = path.dirname(this.__filename);
    this.filtePath = path.join(this.__dirname, '../filtered_data.json')
    mainapp(this.filtePath)
  }

  getStartPage() {
    this.filteredTechnologies = fs.readFileSync(this.filtePath, 'utf-8')
    return {data: this.technologies, filteredData: this.filteredTechnologies};
  }

  filteredItems(data) {
    if (data.data !== null) {
      fs.writeFile("filtered_data.json", JSON.stringify(data), (err) =>
        console.log(err)
      );
    }
  }
}

export const appService = new AppService();
