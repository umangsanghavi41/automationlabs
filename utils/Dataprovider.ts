import fs from 'fs';
import {parse} from 'csv-parse/sync';
import { da } from '@faker-js/faker';

export class DataProvider{
    static getDatafromJSON(filepath:string)
    {
        let data:any=fs.readFileSync(filepath,'utf-8');
        return JSON.parse(data);
    }
}