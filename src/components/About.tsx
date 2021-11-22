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
                    I'm a Product Designer and visual thinker passionate about
                    humanizing tech experiences and creating thoughtful products
                    for community and well being. Best paired with this
                    playlist. I'm a Product Designer and visual thinker
                    passionate about humanizing tech experiences and creating
                    thoughtful products for community and well being. Best
                    paired with this playlist.I'm a Product Designer and visual
                    thinker passionate about experiences and creating thoughtful
                    products for community and well being. Best paired with this
                    playlist.
                    <br />
                    <br />
                    I'm a Product Designer and visual thinker passionate
                    humanizing tech experiences and creating thoughtful products
                    for community and well being. Best paired with this
                    playlist. I'm a Product Designer and visual thinker
                    passionate about humanizing tech experiences and creating
                    thoughtful products for community and well being. Best
                    paired with this playlist. I'm a Product Designer and visual
                    thinker passionate about humanizing tech experiences and
                    creating thoughtful products for community and well being.
                    Best paired with this playlist.
                    <br />
                    <br />
                    I'm a Product Designer and visual thinker passionate about
                    humanizing tech experiences and creating thoughtful products
                    for community and well being. Best paired with this
                    playlist.
                </p>
            </div>
        </div>
    );
};

export default About;
