import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Projects from "../components/Projects";
import Overview from "../components/Overview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const pageDirect = () => {
    switch (page) {
      case "overview":
        return <Overview />;
        break;
      case "projects":
        return <Projects />;
        break;
      case "contact":
        return <Contact />;
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Tepeu Potter</title>
        <meta name="description" content="Projects" />
        <meta name="author" content="Tepeu Potter"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header link="projects" />
      <Projects />

      <Footer />
    </div>
  );
}
