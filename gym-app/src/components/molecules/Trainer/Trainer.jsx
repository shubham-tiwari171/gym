import React from "react";
import styles from "./Trainer.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRef } from "react";
import { data } from "./data/TrainerData";
import { useNavigate } from "react-router-dom";
const Trainer = () => {
  const navigate = useNavigate();
  const scrollRef = useRef();

  const handleLeftScroll = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const handleShowAllTrainers = () => {
    navigate("/showAllTrainers");
  };

  return (
    <>
      <div className={styles.trainerContainer}>
        <h1>Training Program</h1>
        <div ref={scrollRef} className={styles.slider}>
          {data.map((trainer, index) => (
            <div key={index} className={styles.slide}>
              <img src={trainer.urls.regular} alt={trainer.alt_description} />
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={styles.showAllButton}
            onClick={handleShowAllTrainers}
          >
            Show All Trainers
          </button>
          <button className={styles.button} onClick={handleLeftScroll}>
            <MdArrowBack className={`${styles.mdArrowBack}`} size={26} />
          </button>
          <button className={styles.button} onClick={handleRightScroll}>
            <MdArrowForward className={`${styles.mdArrowForward}`} size={26} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Trainer;
