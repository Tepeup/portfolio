import Head from "next/head";
import styles from "../styles/Home.module.css";
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="Portfolio | Tepeu Potter" />
        <meta
          name="twitter:description"
          content="Tepeu Potter's web develeoper portfolio website."
        />
        <meta
          name="twitter:image"
          content="https://www.tepeupotter.com/twitterpreview.png"
        />
      </Head>

      <Header link="overview" />

      <Overview />

      <Footer />
    </div>
  );
}
