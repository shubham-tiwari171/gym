import React from "react";
import styles from "./ShowAllTrainers.module.css";
import { data } from "../Trainer/data/TrainerData";
const ShowAllTrainers = () => {
  return (
    <>
      <h1 className={styles.heading}>All Trainer List</h1>
      <div className={styles.slider}>
        {data.map((trainer) => (
          <div className={styles.slide}>
            <img src={trainer.urls.regular} alt={trainer.alt_description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowAllTrainers;
