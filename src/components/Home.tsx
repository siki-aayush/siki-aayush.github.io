import { useEffect } from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { changePageState, Page } from "../Interfaces";
import profile from "../images/profile.jpg";

const Home = ({ setCurrentPage }: changePageState) => {
    useEffect(() => setCurrentPage(Page.home), [setCurrentPage]);
    const MAIL = "musyajuaayush@gmail.com";
    const LOCATION = "Kathmandu, Nepal";

    return (
        <div className="home flex flex-c flex-ac">
            <div className="home__left">
                <img src={profile} alt="" className="home__left__profile" />
                <div className="home__left__mail flex flex-ac">
                    <HiMail className="home__left__mail__icon" />
                    <span>{MAIL}</span>
                </div>
                <div className="home__left__location flex flex-ac">
                    <IoLocationSharp className="home__left__location" />
                    <span>{LOCATION}</span>
                </div>
            </div>

            <div className="home__separator"></div>
            <div className="home__right">
                <div className="home__right__intro">
                    Hey,<br></br>I'm Aayush musyaju
                </div>
                <div className="home__right__icons">
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
                <div className="home__right__about">
                    I'm a Product Designer and visual thinker passionate about
                    humanizing tech experiences and creating thoughtful products
                    for community and well being. Best paired with this
                    playlist.
                </div>
            </div>
        </div>
    );
};

export default Home;
