import { useEffect } from "react";
import ProfileImg from "../images/about_img.jpg";
import { Page, changePageState } from "../Interfaces";

const About = ({ setCurrentPage }: changePageState) => {
    useEffect(() => setCurrentPage(Page.about), [setCurrentPage]);
    return (
        <div className="about">
            <div className="about__img flex">
                <img src={ProfileImg} alt="" />
            </div>
            <div className="about__description">
                <h2 className="about__description__heading">About</h2>
                <p className="about__description__p">
                    Hi 👋, I'm Aayush Musyaju. Currently, I am a computer
                    engineering undergrad. My passion and curiosity for
                    computers led me to pursue my bachelor's in computer
                    engineering. During my bachelors, I fell in love with
                    programming and learning new things every day. I enjoy
                    confronting challenges, devising solutions, and developing
                    products that will help people in their daily lives. My
                    interests do not stop there. I am also interested in deep
                    learning and cyber security. Basically, I am interested in
                    everything related to computers 🤣.  
                    <br />
                    <br />
                    Apart from the technical stuff, I love reading manga and
                    watching anime. I also enjoy making sketches of anime
                    characters.
                    {
                        //<br />
                        //<br />
                        //I'm a Product Designer and visual thinker passionate about
                        //humanizing tech experiences and creating thoughtful products
                        //for community and well being. Best paired with this
                        //playlist.
                    }
                </p>
            </div>
        </div>
    );
};

export default About;
