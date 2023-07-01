import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Navbar from "../../atom/Navbar/Navbar";
import About from "../About/About";
import Trainer from "../Trainer/Trainer";
import Price from "../../atom/Price/Price";
function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <>
      <div className={styles.container}>
        {/* <Navbar /> */}
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
              <button className={styles.joinButton}>Click me</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.layout}`}>
        <About />
        <Trainer />
        <Price />9
      </div>
    </>
  );
}

export default Home;
