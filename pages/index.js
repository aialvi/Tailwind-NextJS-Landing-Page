import Head from "next/head";
import Hero from "./components/Hero";
import styles from "../styles/Home.module.css";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invenerry - Inventory Management System</title>
        <meta
          name="description"
          content="Invenerry - Inventory Management System"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
        <Testimonials />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Invenerry
        </a>
      </footer>
    </div>
  );
}
