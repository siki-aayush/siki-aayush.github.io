import { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { changePageState, Page } from "../Interfaces";

const Home = ({ setCurrentPage }: changePageState) => {
    useEffect(() => setCurrentPage(Page.home), [setCurrentPage]);

    return (
        <div className="home">
            <div className="home__intro">
                Hey,<br></br>I'm Aayush musyaju
            </div>
            <div className="home__icons">
                <a href="/" className="home__facebook">
                    <FaFacebookF className="icon_test" />
                </a>
                <a href="/" className="home__github">
                    <FaGithub className="icon_test" />
                </a>
                <a href="/" className="home__twitter">
                    <FaTwitter className="icon_test" />
                </a>
                <a href="/" className="home__linkedin">
                    <FaLinkedinIn className="icon_test" />
                </a>
            </div>
            <div className="home__about">
                I'm a Product Designer and visual thinker passionate about
                humanizing tech experiences and creating thoughtful products for
                community and well being. Best paired with this playlist.
            </div>
        </div>
    );
};

export default Home;
