export enum Page {
    home = "home",
    about = "about",
    projects = "projects",
}

//interface language {
//    name: string;
//    color: string;
//}

//type language = string[];

export interface repository {
    name: string;
    description: string;
    url: string;
    languages: string[];
    has_pages: boolean;
    homepage: string;
    //languages: {
    //    nodes: language[];
    //};
}

export interface changePageState {
    setCurrentPage: (page: Page) => void;
}
