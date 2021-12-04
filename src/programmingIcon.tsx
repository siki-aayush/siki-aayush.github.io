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
import { BiGitRepoForked } from "react-icons/bi";
import { SiVim } from "react-icons/si";

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
                    style={{ opacity: "0.8" }}
                    cursor="pointer"
                />
            );
        case "shell":
            return (
                <FaTerminal
                    size="22px"
                    className="projectCard__lang__shell"
                    color="#3178c6"
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
                    key={lang}
                />
            );

        case "java":
            return (
                <FaJava
                    size="22px"
                    className="projectCard__lang__react"
                    color="#f89820"
                    cursor="pointer"
                    key={lang}
                />
            );

        case "python":
            return (
                <FaPython
                    size="22px"
                    className="projectCard__lang__python"
                    color="#4B8BBE"
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
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
                    cursor="pointer"
                    title={lang}
                    key={lang}
                />
            );

        case "vim script":
            return (
                <SiVim
                    size="22px"
                    className="projectCard__lang__vim"
                    color="#20692c"
                    cursor="pointer"
                    title={lang}
                    key={lang}
                />
            );

        case "fork":
            return (
                <BiGitRepoForked
                    size="22px"
                    className="projectCard__lang__fork"
                    color="#000"
                    cursor="pointer"
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
                    cursor="pointer"
                    title={lang}
                    key={lang}
                    style={{ opacity: "0.8" }}
                />
            );
    }
};

export default insertIcon;
