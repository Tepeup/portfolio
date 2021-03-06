import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Overview() {
  const skillsList = [
    "React / Redux",
    "Node.js / Javascript",
    "CSS / Sass",
    "MongoDb / Firebase",
    "Shopify Liquid",
    "Express / REST API",
    "Visual Basic for Applications",
    "Photoshop",
    "Mobile First Developement",
  ];
  return (
    <div className={styles.overview}>
      <div className={styles.whitebar}>
        <div className={`${styles.overviewinfo}`}>
          <div className="container">
            <div className="glitch" data-text="Tepeu Zipacna Potter">
              Tepeu Zipacna Potter
            </div>
          </div>
          <div className="animate__animated animate__fadeInDown">
            <Link href="/projects">
              <button className={styles.button}>Projects</button>
            </Link>
            <a href="/Resume.pdf" target="_blank" download>
              <button className={`${styles.button} ${styles.secondary}`}>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.titlecard}>
        <div className={styles.overviewcard}>
          <div className={styles.cardinfo}>
            <div className={styles.cardtop}>
              <div>
                <p>Web Developer</p>
                <p className={styles.aboutdesc}>
                  Passionate about science and all things Web Development,
                  strong focus on user experiences and building intuitive
                  interfaces.
                </p>
                <p className={styles.aboutdesc}>Based in Austin, TX</p>
              </div>
            </div>
          </div>
          <a href="https://github.com/Tepeup">
            <div className={styles.cardfooter}>
              <div className={styles.footerlink}>
                <i className="fa fa-github"></i>
                <p>https://github.com/Tepeup</p>
              </div>
            </div>{" "}
          </a>
        </div>
        <div className={styles.skillscard}>
          <div className={styles.skillstitle}>
            <strong>Skills</strong>
          </div>

          <div className={styles.skillslist}>
            {skillsList.map((skill) => {
              return (
                <ul key={Math.random()}>
                  <div className={styles.dot}></div>
                  <p className={`${styles.skillset}`}>{skill}</p>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
