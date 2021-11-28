import { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { SiReactos } from "react-icons/si";

import ProjectCard from "./ProjectCard";
import { repository, changePageState, Page } from "../Interfaces";

const endpoint = "https://api.github.com/graphql";
const KEY = "bearer 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";
const PROJECTS_QUERY = `
{
  user(login: "siki-aayush") {
	repositories(first: 60, privacy: PUBLIC)  {
	  nodes {
		name
		description
		url
		languages(first: 20) {
		  nodes {
			name
			color
		  }
		}
	  }
	}
  }
}
`;

const Projects = ({ setCurrentPage }: changePageState) => {
    useEffect(() => setCurrentPage(Page.projects), [setCurrentPage]);
    const { data, isLoading, error } = useQuery<repository[], Error>(
        "repos",
        async () => {
            return axios({
                url: endpoint,
                method: "POST",
                headers: {
                    Authorization: KEY,
                },
                data: {
                    query: PROJECTS_QUERY,
                },
            }).then((response) => {
                return response.data.data.user.repositories.nodes;
            });
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
