import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3,
    FaPython,
    FaJava,
    FaUserSecret,
    FaDocker,
    FaSass,
    FaTerminal,
} from "react-icons/fa";

import { SiJupyter, SiTypescript, SiC } from "react-icons/si";

const insertIcon = (lang: string) => {
    switch (lang) {
        case "c":
        case "objective-c":
            return (
                <SiC
                    size="22px"
                    className="projectCard__lang__c"
                    color="#5c32bd"
                    title={lang}
                    key={lang}
                />
            );
        case "shell":
            return (
                <FaTerminal
                    size="22px"
                    className="projectCard__lang__shell"
                    color="#3178c6"
                    title={lang}
                    key={lang}
                />
            );
        case "typescript":
            return (
                <SiTypescript
                    size="22px"
                    className="projectCard__lang__typescript"
                    color="#3178c6"
                    title={lang}
                    key={lang}
                />
            );

        case "scss" || "sass":
            return (
                <FaSass
                    size="22px"
                    className="projectCard__lang__scss"
                    color="#cc6699"
                    title={lang}
                    key={lang}
                />
            );

        case "dockerfile":
            return (
                <FaDocker
                    size="22px"
                    className="projectCard__lang__docker"
                    color="#0db7ed"
                    title={lang}
                    key={lang}
                />
            );

        case "react":
            return (
                <FaReact
                    size="22px"
                    className="projectCard__lang__react"
                    color="#61DBFB"
                    key={lang}
                />
            );

        case "java":
            return (
                <FaJava
                    size="22px"
                    className="projectCard__lang__react"
                    color="#f89820"
                    key={lang}
                />
            );

        case "python":
            return (
                <FaPython
                    size="22px"
                    className="projectCard__lang__python"
                    color="#4B8BBE"
                    title={lang}
                    key={lang}
                />
            );

        case "html":
            return (
                <FaHtml5
                    size="22px"
                    className="projectCard__lang__html"
                    color="#e34f26"
                    title={lang}
                    key={lang}
                />
            );

        case "css":
            return (
                <FaCss3
                    size="22px"
                    className="projectCard__lang__css"
                    color="#264de4 "
                    title={lang}
                    key={lang}
                />
            );

        case "javascript":
            return (
                <FaJs
                    size="22px"
                    className="projectCard__lang__js"
                    color="#F0DB4F"
                    title={lang}
                    key={lang}
                />
            );

        case "jupyter notebook":
            return (
                <SiJupyter
                    size="22px"
                    className="projectCard__lang__jupyter"
                    color="#F0DB4F"
                    title={lang}
                    key={lang}
                />
            );

        default:
            return (
                <FaUserSecret
                    size="22px"
                    className="projectCard__lang__secret"
                    color="#5c32bd"
                    title={lang}
                    key={lang}
                />
            );
    }
};

export default insertIcon;
