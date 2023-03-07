

import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';
export class testDataGenarate {

     records: Array<string>;

    constructor() {
this.records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
    columns: true,
    skip_empty_lines: true
    
  }); 

}

get recordsdata() {
    return this.records;
}

}