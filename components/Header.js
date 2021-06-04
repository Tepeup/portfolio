import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.brand}>TP</a>
        </Link>
        <Link href="/">
          <a className={props.link === "overview" ? "active" : null}>
            Overview
          </a>
        </Link>
        <Link href="/projects">
          <a className={props.link === "projects" ? "active" : null}>
            Projects
          </a>
        </Link>
      </nav>
    </header>
  );
}
