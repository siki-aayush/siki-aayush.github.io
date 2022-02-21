import { useState } from "react";

import { Page } from "../Interfaces";
import NavLinks from "./NavLinks";
import { IoMenu, IoClose } from "react-icons/io5";

interface navProps {
  currentPage: Page;
}

const Nav = ({ currentPage }: navProps) => {
  const [menu, setMenu] = useState<Boolean>(false);

  // Animation time -> 100 ms higher than scss animation time
  const ANIMATION_TIME = 500;

  const onPageChange = () => {
    //setCurrentPage(newPage);
    menu && onHamburgerBtnClose();
  };

  // Animation of closing burger menu
  const onHamburgerBtnClose = () => {
    setMenu((prevState) => !prevState);
    document
      .querySelectorAll(".nav__mobileNav__links .nav__element a")
      .forEach((elem) => {
        //elem.classList.remove("move-down");
        elem.classList.add("move-up");
        setTimeout(() => elem.classList.remove("move-up"), ANIMATION_TIME);
      });
  };

  // Animation of opening burger mennu
  const onHamburgerBtnOpen = () => {
    setMenu((prevState) => !prevState);
    document
      .querySelectorAll(".nav__mobileNav__links .nav__element a")
      .forEach((elem) => {
        //elem.classList.remove("move-up");
        elem.classList.add("move-down");
        setTimeout(() => elem.classList.remove("move-down"), ANIMATION_TIME);
      });
  };

  return (
    <header className="nav flex flex-ac flex-sb">
      <div className="nav__left">
        <a href="/">SikiAayush</a>
      </div>
      <div className="nav__webNav flex">
        <NavLinks currentPage={currentPage} onPageChange={onPageChange} />
      </div>
      <div className="nav__mobileNav">
        {menu === true ? (
          <IoClose
            size={20}
            style={{ cursor: "pointer" }}
            onClick={onHamburgerBtnClose}
          />
        ) : (
          <IoMenu
            size={20}
            style={{ cursor: "pointer" }}
            onClick={onHamburgerBtnOpen}
          />
        )}

        <div
          className={`nav__mobileNav__links flex flex-ac flex-dc ${
            menu ? "" : "hide"
          }`}
        >
          <NavLinks currentPage={currentPage} onPageChange={onPageChange} />
        </div>
      </div>
    </header>
  );
};

export default Nav;
