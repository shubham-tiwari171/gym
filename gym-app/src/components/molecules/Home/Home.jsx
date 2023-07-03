import React, { useEffect, useState, useRef } from "react";
import styles from "./Home.module.css";
import Navbar from "../../atom/Navbar/Navbar";
import About from "../About/About";
import Trainer from "../Trainer/Trainer";
import Price from "../../atom/Price/Price";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const trainerRef = useRef(null);
  const priceRef = useRef(null);
  const programRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    training: trainerRef,
    pricing: priceRef,
    program: programRef,
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallWindow = windowWidth <= 500;
  const handleClick = () => {
    navigate("/register");
  };

  // scrolling to the clicked section
  const scrollToSection = (link) => {
    const sectionRef = sectionRefs[link];
    if (sectionRef && sectionRef.current) {
      console.log(sectionRef.current);
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <div ref={homeRef} className={styles.container}>
        <Navbar scrollToSection={scrollToSection} />
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <p className={styles.contentText}>
              Take care of your{" "}
              <span className={`${styles.highlightedText}`}>body</span>
              {!isSmallWindow && <br />}It's the only place
              {!isSmallWindow && <br />}you have to{" "}
              <span className={`${styles.highlightedText}`}>live</span>
            </p>
            <div>
              <button className={styles.joinButton} onClick={handleClick}>
                Join with us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.layout}`}>
        <div ref={aboutRef}>
          {" "}
          <About />
        </div>
        <div ref={trainerRef}>
          {" "}
          <Trainer />
        </div>
        <div ref={priceRef}>
          {" "}
          <Price />
        </div>
        <div ref={priceRef}>
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
