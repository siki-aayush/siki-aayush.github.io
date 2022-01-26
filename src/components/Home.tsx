import { useEffect } from "react";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

import { ImFacebook } from "react-icons/im";
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
                    <IoLocationSharp className="home__left__location__icon" />
                    <span>{LOCATION}</span>
                </div>
            </div>

            <div className="home__separator"></div>
            <div className="home__right">
                <div className="home__right__intro">
                    Hey,<br></br>I'm Aayush musyaju
                </div>
                <div className="home__right__icons">
                    <a href="/" className="home__github">
                        <BsGithub className="icon_test" />
                        {
                            //<FiGithub className="icon_test" fill="#000000b8" />
                        }
                    </a>
                    <a href="/" className="home__twitter">
                        <BsTwitter className="icon_test" />
                        {
                            //<FiTwitter className="icon_test" />
                        }
                    </a>
                    <a href="/" className="home__linkedin">
                        <BsLinkedin className="icon_test" />
                    </a>
                    <a href="/" className="home__facebook">
                        <ImFacebook className="icon_test" />
                    </a>
                </div>
                <div className="home__right__about">
                    I am a computer engineering undergraduate who is constantly
                    eager to learn new things and develop solutions. I would
                    love to develop products that will help people on thier
                    daily life. I enjoy working on projects that are meaningful
                    and impactful to the society. I am a huge fan of the anime
                    and manga world.
                    {/* I'm a Product Designer and visual thinker passionate about
                    humanizing tech experiences and creating thoughtful products
                    for community and well being. Best paired with this
                    playlist. */}
                </div>
            </div>
        </div>
    );
};

export default Home;
