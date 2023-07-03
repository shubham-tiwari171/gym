import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { data } from "./data/FooterData";
export function Footer() {
  return (
    <>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.leftContainer}`}>
          <div className={`${styles.leftContainerHeading}`}>GYM </div>
          <div className={`${styles.leftContainerContent}`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A,
            necessitatibus ab obcaecati quae voluptate, eius nobis eos
            reiciendis, ratione aut officiis rem cumque? Placeat eos beatae
            corporis nam rerum accusantium?
          </div>
          <div className={`${styles.iconContainer}`}>
            <a href="https://www.instagram.com/">
              <FaInstagram
                size={30}
                className={`${styles.commanClass} ${styles.facebook}`}
              />
            </a>
            <a href="https://www.facebook.com/">
              {" "}
              <FaFacebook
                size={30}
                className={`${styles.commanClass} ${styles.insta}`}
              />
            </a>

            <a href="https://twitter.com">
              <FaTwitter
                size={30}
                className={`${styles.commanClass} ${styles.twitter}`}
              />
            </a>
          </div>
        </div>
        <div className={`${styles.rightContainer}`}>
          <div className={`${styles.healtyLiving}`}>
            <h2
              style={{
                textAlign: "left",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Healthy Living
            </h2>
            <ul className={`${styles.lists}`}>
              {data.map((hList, index) => (
                <li key={index} className={`${styles.list}`}>
                  <span>{hList}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.services}`}>
            <h2
              style={{
                textAlign: "left",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Services
            </h2>
            <ul className={`${styles.lists}`}>
              {data.map((hList, index) => (
                <li key={index} className={`${styles.list}`}>
                  <span>{hList}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${styles.program}`}>
            <h2
              style={{
                textAlign: "left",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Programms{" "}
            </h2>
            <ul className={`${styles.lists}`}>
              {data.map((hList, index) => (
                <li
                  key={index}
                  className={`${styles.list}`}
                  style={{ marginBottom: ".5rem" }}
                >
                  <span>{hList}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
