import Head from "next/head";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack Projects | Tepeu Potter</title>
        <meta name="description" content="Fullstack Projects" />
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
