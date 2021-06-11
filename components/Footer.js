import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/Tepeup">
        <i className="fa fa-github" />
      </Link>

      <Link href="https://www.linkedin.com/in/tepeu-potter/">
        <i style={{ color: "#0966C2" }} className="fa fa-linkedin-square" />
      </Link>

      <Link href="mailto:tepeupotter@gmail.com">
        <i className="fa fa-envelope" />
      </Link>
    </footer>
  );
}
