import React from "react";
import styles from "./Trainer.module.css";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRef } from "react";
import { data } from "./data/TrainerData";
import { useNavigate } from "react-router-dom";
const Trainer = () => {
  console.log(data);
  const navigate = useNavigate();
  const scrollRef = useRef();
  const handleLeftScroll = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const handleRightScroll = () => {
    scrollRef.current.scrollLeft += 300;
  };

  const handleShowAllTrainers = () => {
    // Logic to handle "Show All Trainers" button click
    // Implement the desired behavior here
    navigate("/showAllTrainers");
  };

  return (
    <>
      <div className={styles.trainerContainer}>
        <h1>Training Program</h1>
        <div ref={scrollRef} className={styles.slider}>
          {data.map((trainer) => (
            <div className={styles.slide}>
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
            <MdArrowBack size={26} />
          </button>
          <button className={styles.button} onClick={handleRightScroll}>
            <MdArrowForward size={26} />
          </button>
        </div>
      </div>
    </>
  );
};
export default Trainer;
