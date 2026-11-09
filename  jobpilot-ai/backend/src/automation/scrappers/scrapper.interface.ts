

import {Job} from "../../modules/jobs/jobs.types";

export interface Scrapper{
    scrape(): Promise<Job[]>;
}