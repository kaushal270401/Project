import puppeteer, { Browser, Page } from "puppeteer";


class BrowserService {
    private browser : Browser | null =null;

    async launch(): Promise<Browser>{
        if (this.browser){
            return this.browser;
        }

        this.browser =await puppeteer.launch({
            headless: false
        });
        
        console.log("Browser launched successfully");
        return this.browser;
    }

    async close(): Promise<void>{
        if (this.browser){
            await this.browser.close();
            this.browser = null;
            console.log("Browser closed successfully");
        }
    }
}

export const browserService = new BrowserService();