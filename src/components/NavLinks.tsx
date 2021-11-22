import { Link } from "react-router-dom";

import { Page } from "../Interfaces";

interface navProps {
    currentPage: Page;
    onPageChange: () => void;
}

const NavLinks = ({ currentPage, onPageChange }: navProps) => {
    return (
        <>
            <div className="nav__element">
                <Link
                    to="/"
                    className="nav__element__home"
                    onClick={onPageChange}
                >
                    Home
                    {currentPage === Page.home && (
                        <div className="nav__element__highlight" />
                    )}
                </Link>
            </div>
            <div className="nav__element">
                <Link
                    to="/about"
                    className="nav__element__about"
                    onClick={onPageChange}
                >
                    About
                    {currentPage === Page.about && (
                        <div className="nav__element__highlight" />
                    )}
                </Link>
            </div>
            <div className="nav__element">
                <Link
                    to="/projects"
                    className="nav__element__projects"
                    onClick={onPageChange}
                >
                    Projects
                    {currentPage === Page.projects && (
                        <div className="nav__element__highlight" />
                    )}
                </Link>
            </div>
        </>
    );
};

export default NavLinks;
