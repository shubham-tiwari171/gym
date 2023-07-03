import React from "react";
import styles from "./About.module.css";
const About = () => {
  const handleAlertClick = () => {
    alert("You are in about section");
  };
  return (
    <section className={styles.aboutSection}>
      <div className={styles.row}>
        <div className={styles.leftUpperRow}>
          <iframe
            width="501"
            height="355"
            src="https://www.youtube.com/embed/eaRQF-7hhmo?start=2"
            title="YouTube video player"
            fillRule="evenodd"
          ></iframe>
        </div>
        <div className={styles.rightupperRow}>
          <h1>About Us</h1>
          <p>
            <span className={styles.childText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </span>
          </p>
          <button className={styles.learnMore} onClick={handleAlertClick}>
            Learn more
          </button>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.rightupperRow}>
          <h1>Why choose us?</h1>

          <p>
            <span className={styles.childText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </span>
          </p>

          {/* <button className={styles.joinButton}>Learn more</button> */}
        </div>

        <div className={styles.leftUpperRow}>
          <iframe
            width="501"
            height="355"
            src="https://www.youtube.com/embed/V-siUdyJ3Ac?start=4"
            title="YouTube video player"
            fillRule="evenodd"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
