import { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { SiReactos } from "react-icons/si";

import ProjectCard from "./ProjectCard";
import { repository, changePageState, Page } from "../Interfaces";

//const endpoint = "https://api.github.com/graphql";
//const KEY = "bearer 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";
//const PROJECTS_QUERY = `
//{
//  user(login: "siki-aayush") {
//    repositories(first: 60, privacy: PUBLIC)  {
//      nodes {
//        name
//        description
//        url
//        languages(first: 20) {
//          nodes {
//            name
//            color
//          }
//        }
//      }
//    }
//  }
//}
//`;

const Projects = ({ setCurrentPage }: changePageState) => {
    useEffect(() => setCurrentPage(Page.projects), [setCurrentPage]);
    const { data, isLoading, error } = useQuery<repository[], Error>(
        "repos",
        async () => {
            const all_data = await axios({
                url: "https://api.github.com/users/siki-aayush/repos",
                method: "GET",
                headers: {
                    Accept: "application/vnd.github.v3+json",
                    Authorization: "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",
                },
            }).then((resp) => resp.data);

            const process_data: repository[] = await Promise.all(
                all_data.map(async (repo: any) => {
                    const lang = await axios
                        .get(repo.languages_url)
                        .then((resp) => {
                            return Object.keys(resp.data);
                        });
                    return {
                        name: repo.name,
                        description: repo.description,
                        url: repo.html_url,
                        languages: lang,
                        has_pages: repo.has_pages,
                        homepage: repo.homepage,
                        fork: repo.fork,
                    };
                })
            );

            console.log(process_data);
            return process_data;
            //return axios({
            //    url: endpoint,
            //    method: "POST",
            //    headers: {
            //        Authorization: KEY,
            //    },
            //    data: {
            //        query: PROJECTS_QUERY,
            //    },
            //}).then((response) => {
            //    console.log(response.data.data.user.repositories.nodes);
            //    return response.data.data.user.repositories.nodes;
            //});
        }
    );

    if (isLoading) return <SiReactos className="projects__spinner" />;
    if (error) return <div>{error.message}</div>;
    //return <SiReactos className="projects__spinner" />;

    //const fetchData = async () => {
    //    await axios({
    //        url: endpoint,
    //        method: "POST",
    //        headers: {
    //            Authorization: KEY,
    //        },
    //        data: {
    //            query: PROJECTS_QUERY,
    //        },
    //    }).then((response) => {
    //        setIsLoading(false);
    //        setRepos(response.data.data.user.repositories.nodes);
    //    });
    //};

    return (
        <div className="projects flex flex-c flex-ac">
            {data!.map((repo: repository, index: number) => (
                <ProjectCard key={repo.name + index} repo={repo} />
            ))}
        </div>
    );
};

export default Projects;
