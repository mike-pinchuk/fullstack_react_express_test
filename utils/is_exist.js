import * as fs from "fs";

export async function mainapp(path) {
  if (!fs.existsSync(path)) {
    fs.writeFile("filtered_data.json", "", (err) => console.log(err));
  }
}
