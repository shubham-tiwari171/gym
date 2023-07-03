import React from "react";
import styles from "./Footer.module.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { data } from "./data/FooterData";
export function Footer() {
  return (
    <>
      {/* <div className={style.full_div}>
        <footer className={style.footer_section}>
          <div className={style.left_side}>
            <h1 style={{ color: "rgb(244, 56, 87)" }}>GYM</h1>
            <p
              style={{ color: "white", fontSize: "1.2rem", textAlign: "start" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              modi quas incidunt harum cupiditate omnis?
            </p>
            <div className={style.footer_icons}>
              <BsFacebook
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  cursor: "pointer",
                }}
              />
              <GrInstagram
                style={{
                  marginLeft: "1rem",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  background: "white",
                  cursor: "pointer",
                }}
              />
              <AiFillTwitterCircle
                style={{
                  marginLeft: "1rem",
                  background: "white",
                  borderRadius: "1rem",
                  padding: ".5rem",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className={style.right_side}>
            <div className={style.right_line1}>
              <h2 style={{ color: "white" }}>Healthy living</h2>
              <ul className={style.UL}>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
              </ul>
            </div>
            <div className={style.right_line2}>
              <h2 style={{ color: "white" }}>Services</h2>
              <ul className={style.UL}>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
              </ul>
            </div>
            <div className={style.right_line3}>
              <h2 style={{ color: "white" }}>Programms</h2>
              <ul className={style.UL}>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
                <li>Lorem</li>
                <li>Lorem, ipsum</li>
              </ul>
            </div>
          </div>
        </footer>
        <p>@2023 isr All rights copy reserved</p>
      </div> */}
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
