export type Packagist = {
    package: {
        creator: string;
        "dc:creator": string;
        title: string;
        link: string;
        "content:encoded": string;
        "content:encodedSnippet": string;
        guid: string;
        isoDate: string;
        pubDate: string;
        categories: string[];
        name: string,
        description: string,
        time: string,
        maintainers: string[],
        versions: {},
        type: string,
        repository: string,
        github_stars: number,
        github_watchers: number,
        github_forks: number,
        github_open_issues: number,
        language: string,
        dependents: number,
        suggesters: number,
        downloads: {
            total: number,
            monthly: number,
            daily: number,
        },
        favers: number
    }

};