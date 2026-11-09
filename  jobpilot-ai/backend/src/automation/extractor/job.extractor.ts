
import type { Page } from 'puppeteer'
import type { Job } from '../../modules/jobs/jobs.types.js'

export class JobExtractor {
    static async extractJobs(page: Page): Promise<Job[]> {

        const extractedJobs = await page.$$eval('.job-card', (cards) => {
            return cards.map((ele) => ({
                title: ele.querySelector('.job-title')?.textContent?.trim() || '',
                company: ele.querySelector('.company')?.textContent?.trim() || '',
                location: ele.querySelector('.location')?.textContent?.trim() || '',
                salary: ele.querySelector('.salary')?.textContent?.trim() || '',
                jobUrl: ele.querySelector('a')?.getAttribute('href') || ''
            }))
        })

        return extractedJobs.map((job) => ({
            title: job.title,
            company: job.company,
            location: job.location,
            salary: job.salary,
            experience: null,
            jobType: null,
            workMode: null,
            description: null,
            skills: [],
            jobUrl: job.jobUrl ? new URL(job.jobUrl, page.url()).toString() : '',
            source: 'MockScrapper',
            postedAt: null,
            scrapedAt: new Date()
        }))
    }
}
