// import { browserService } from "./automation/browser/browser.services";
// import { ScrapperFactory } from "./automation/scrappers/scrapper.factory";

// async function main() {
//     try {
        
//         const browser = await browserService.launch();

//         const page = await browser.newPage();

//         const scraper = ScrapperFactory.createScrapper("mock", page);

//         const jobs = await scraper.scrape();

//         console.log("Scraped Jobs:", jobs);

//         await page.close();

//     } catch (error) {
//         console.error("Error occurred:", error);

//     } finally {
//         // 6. Close browser
//         await browserService.close();
//     }
// }

// main();

import { connectDatabase } from "./config/database.js";

async function main() {
  try {
    await connectDatabase();
  } catch (error) {
    console.error("Application startup failed:", error);
    process.exitCode = 1;
  }
}

main();