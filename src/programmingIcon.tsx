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

const insertIcon = (lang: string, color: string) => {
    switch (lang) {
        case "c":
        case "objective-c":
            return (
                <SiC
                    size="22px"
                    className="projectCard__lang__c"
                    color={color}
                    title={lang}
                />
            );
        case "shell":
            return (
                <FaTerminal
                    size="22px"
                    className="projectCard__lang__shell"
                    color="#3178c6"
                    title={lang}
                />
            );
        case "typescript":
            return (
                <SiTypescript
                    size="22px"
                    className="projectCard__lang__typescript"
                    color="#3178c6"
                    title={lang}
                />
            );

        case "scss" || "sass":
            return (
                <FaSass
                    size="22px"
                    className="projectCard__lang__scss"
                    color="#cc6699"
                    title={lang}
                />
            );
        case "dockerfile":
            return (
                <FaDocker
                    size="22px"
                    className="projectCard__lang__docker"
                    color="#0db7ed"
                    title={lang}
                />
            );

        case "react":
            return (
                <FaReact
                    size="22px"
                    className="projectCard__lang__react"
                    color="#61DBFB"
                />
            );

        case "java":
            return (
                <FaJava
                    size="22px"
                    className="projectCard__lang__react"
                    color="#f89820"
                />
            );

        case "python":
            return (
                <FaPython
                    size="22px"
                    className="projectCard__lang__python"
                    color="#4B8BBE"
                    title={lang}
                />
            );

        case "html":
            return (
                <FaHtml5
                    size="22px"
                    className="projectCard__lang__html"
                    color="#e34f26"
                    title={lang}
                />
            );

        case "css":
            return (
                <FaCss3
                    size="22px"
                    className="projectCard__lang__css"
                    color="#264de4 "
                    title={lang}
                />
            );

        case "javascript":
            return (
                <FaJs
                    size="22px"
                    className="projectCard__lang__js"
                    color="#F0DB4F"
                    title={lang}
                />
            );

        case "jupyter notebook":
            return (
                <SiJupyter
                    size="22px"
                    className="projectCard__lang__jupyter"
                    color="#F0DB4F"
                    title={lang}
                />
            );

        default:
            return (
                <FaUserSecret
                    size="22px"
                    className="projectCard__lang__secret"
                    title={lang}
                    color={color}
                />
            );
    }
};

export default insertIcon;
