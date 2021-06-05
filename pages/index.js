import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Overview from "../components/Overview";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Overview | Tepeu Potter</title>
        <meta name="description" content="Overview" />
        <meta name="author" content="Tepeu Potter"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Header link="overview" />

      <Overview />

      <Footer />
    </div>
  );
}
