import {MockScrapper} from "./sources/mock.scrapper";

export type ScrapperSource = "mock" | "indeed" | "linkedin" | "glassdoor";

export class ScrapperFactory {
    static createScrapper(source: ScrapperSource, page: any): any {
        switch (source) {
            case "mock":
                return new MockScrapper(page);
            default:
                throw new Error(`Unsupported scrapper source: ${source}`);
        }           
    }
}