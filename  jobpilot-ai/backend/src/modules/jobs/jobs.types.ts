
export interface Job {
    title: string | null;
    company: string | null;
    location: string | null;
    salary: string | null;
    experience: string | null;
    jobType: string | null;
    workMode: string | null;
    description: string | null;
    skills: string[];
    jobUrl: string;
    source: string;
    postedAt: Date | null;
    scrapedAt: Date;
}
