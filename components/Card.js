import React from "react";
import styles from "../styles/Home.module.css";

export default function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardscreenshot}>
        <a href={`${props.href}`}>
          <img src={`${props.image}`} alt={`${props.alt}`} />
        </a>
      </div>
      <div className={styles.cardinfo}>
        <div className={styles.cardtop}>
          <div>
            <p>{props.title}</p>
            <span className={styles.website}>{props.website}</span>
          </div>

          <a href={`${props.href}`}>
            <button className={styles.button}>Visit</button>
          </a>
        </div>
        <div className={styles.cardmiddle}>
          {props.description.map((req) => {
            return (
              <ul key={Math.random()}>
                <div className={styles.dot}></div>
                <p>{req}</p>
              </ul>
            );
          })}
        </div>
      </div>
      <div className={styles.cardfooter}>
        <a href={`${props.gitlink}`}>
          <div className={styles.footerlink}>
            <i className="fa fa-github"></i>
            <p>{`${props.gitname}`}</p>
          </div>
        </a>
        <a href={`${props.gitlink}`}>
          <button className={`${styles.button} ${styles.secondary}`}>
            Code
          </button>
        </a>
      </div>
    </div>
  );
}
