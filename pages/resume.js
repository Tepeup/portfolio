import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <Header />
      <div className={styles.resume}>
        <img
          src="/resumeone.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <img
          src="/resumetwo.png"
          alt="Picture of the author"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>

      <Footer />
    </div>
  );
}