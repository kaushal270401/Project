
import type { Page } from "puppeteer";
import type { Job } from "../../../modules/jobs/jobs.types.js";
import type { Scrapper } from "../scrapper.interface.js";
import { JobExtractor } from "../../extractor/job.extractor.js";

export class MockScrapper implements Scrapper {
    constructor(private readonly page: Page) {
        console.log("Scrapper received page:", typeof page.goto);
    }

    async scrape(): Promise<Job[]> {
        try {
            console.log("Starting MockScrapper...");

            await this.page.goto("http://localhost:3001", {
                waitUntil: "domcontentloaded",
                timeout: 30000
            });

            await this.page.waitForFunction(() => {
                return document.querySelectorAll(".job-card").length >= 4;
            }, {
                timeout: 10000
            });

            // Extract jobs directly inside browser context
            const jobs = await JobExtractor.extractJobs(this.page);

            console.log(`Successfully scraped ${jobs.length} jobs`);

            return jobs.map((job) => ({
                ...job,
                scrapedAt: new Date(job.scrapedAt)
            })) as Job[];

        } catch (error) {
            console.error("Scraping failed:", error);
            throw error;
        }
    }
}
