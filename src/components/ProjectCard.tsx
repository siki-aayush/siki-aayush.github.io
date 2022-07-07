import { repository } from "../Interfaces";
import insertIcon from "../programmingIcon";
import { RiGitRepositoryLine, RiComputerLine } from "react-icons/ri";

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
        {repo.languages.map((lang) => insertIcon(lang.toLowerCase()))}
        {repo.fork ? insertIcon("fork") : null}
      </div>
      <div className="projectCard__btn flex flex-ac">
        <button
          className="projectCard__btn__repo flex flex-ac flex-c"
          onClick={() => window.open(repo.url)}
        >
          <RiGitRepositoryLine /> Repository
        </button>
        <button
          className="projectCard__btn__demo flex flex-ac flex-c "
          onClick={() => window.open(repo.homepage)}
          //disabled={!repo.has_pages}
          disabled={!repo.homepage}
        >
          <RiComputerLine /> Website
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
