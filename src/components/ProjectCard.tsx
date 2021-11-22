import { repository } from "../Interfaces";
import insertIcon from "../programmingIcon";

interface projectCardProps {
    repo: repository;
}

const ProjectCard = ({ repo }: projectCardProps) => {
    repo.name = repo.name.replaceAll("_", " ");
    repo.name = repo.name.replaceAll("-", " ");
    repo.name = repo.name.charAt(0).toUpperCase() + repo.name.slice(1);
    return (
        <div className="projectCard">
            <div className="projectCard__title">{repo.name}</div>
            <div className="projectCard__desc">{repo.description}</div>
            <div className="projectCard__lang">
                {repo.languages.nodes.map(({ name, color }) =>
                    insertIcon(name.toLowerCase(), color)
                )}
            </div>
            <div className="projectCard__btn flex flex-ac">
                {
                    //<a
                    //    href={repo.url}
                    //    className="projectCard__btn__repo flex flex-ac flex-c"
                    //>
                    //    Repository
                    //</a>
                    //<a
                    //    href="#"
                    //    className="projectCard__btn__demo flex flex-ac flex-c"
                    //>
                    //    Demo Link
                    //</a>
                }
                <button
                    //onClick={repo.url}
                    className="projectCard__btn__repo flex flex-ac flex-c"
                    onClick={() => window.open(repo.url)}
                >
                    Repository
                </button>
                <button
                    className="projectCard__btn__demo flex flex-ac flex-c "
                    onClick={() => window.open(repo.url)}
                    disabled
                >
                    Demo Link
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
