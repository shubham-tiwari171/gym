import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { MdFormatAlignRight, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("Home");
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 900) {
        setToggle(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleToggle() {
    setToggle(!toggle);
  }

  const handleActiveClicked = (link) => {
    setActiveLink(link);
    scrollToSection(link.toLowerCase()); // Convert text to lowercase
  };

  const handleClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.navbar}>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.navbarLeft}`}
      >
        <div className={`${styles.logo}`}>GYM:-{windowWidth}</div>
        {windowWidth < 1100 && (
          <div
            className={
              toggle ? `${styles.menuItems}` : `${styles.menuItemsDisplay}`
            }
          >
            <div
              className={` ${
                activeLink === "Home" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Home")}
            >
              Home
            </div>
            <div
              className={` ${
                activeLink === "About" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("About")}
            >
              About
            </div>
            <div
              className={` ${
                activeLink === "Training" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Training")}
            >
              Training
            </div>
            <div
              className={` ${
                activeLink === "Pricing" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Pricing")}
            >
              Pricing
            </div>
            <div>
              <button className={`${styles.joinButton}`}>Join</button>
            </div>
          </div>
        )}
      </div>

      <div
        className={`d-flex justify-content-end align-items-center ${styles.navbarRight}`}
      >
        {windowWidth >= 1100 && (
          <>
            <div
              className={` ${
                activeLink === "Home" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Home")}
            >
              Home
            </div>
            <div
              className={` ${
                activeLink === "About" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("About")}
            >
              About
            </div>
            <div
              className={` ${
                activeLink === "Training" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Training")}
            >
              Training
            </div>
            <div
              className={` ${
                activeLink === "Pricing" ? `${styles.menuItemsBackground}` : ""
              }`}
              onClick={() => handleActiveClicked("Pricing")}
            >
              Pricing
            </div>
            <div>
              <button className={`${styles.joinButton}`} onClick={handleClick}>
                Join
              </button>
            </div>
          </>
        )}

        {windowWidth < 1100 ? (
          <span>
            {toggle ? (
              <MdClose
                size={40}
                onClick={handleToggle}
                className={styles.mdIcons}
              />
            ) : (
              <MdFormatAlignRight
                size={40}
                className={styles.mdIcons}
                onClick={handleToggle}
              />
            )}
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;
