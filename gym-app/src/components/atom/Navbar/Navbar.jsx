import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { MdFormatAlignRight, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../../../redux/reducers/reducers";
import { useDispatch, useSelector } from "react-redux";
const Navbar = ({ scrollToSection }) => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state.user);
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

  const handleClick = (rautePath) => {
    switch (rautePath) {
      case "/logout":
        dispatch(logout());
        navigate("/login");
        break;
      case "/register":
        navigate(rautePath);
        break;
      default:
        break;
    }
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
              {isUserLoggedIn ? (
                <button
                  className={`${styles.joinButton}`}
                  onClick={() => handleClick("/logout")}
                >
                  Logout
                </button>
              ) : (
                <button
                  className={`${styles.joinButton}`}
                  onClick={() => handleClick("/register")}
                >
                  Join
                </button>
              )}
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
