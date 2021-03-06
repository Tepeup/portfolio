import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume | Tepeu Potter</title>
        <meta name="description" content="Resume" />
        <meta name="author" content="Tepeu Potter"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Header />
      <div className={styles.resume}>
        <img src="/resumeone.png" alt="Resume Page One" width={500} />
        <img src="/resumetwo.png" alt="Resume Page Two" width={500} />
      </div>

      <Footer />
    </div>
  );
}
