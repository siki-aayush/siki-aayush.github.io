export enum Page {
    home = "home",
    about = "about",
    projects = "projects",
}

interface language {
    name: string;
    color: string;
}

export interface repository {
    name: string;
    description: string;
    url: string;
    languages: {
        nodes: language[];
    };
}
