"use client"

import axios from "axios";
import styles from "./page.module.css";

export default async function Home() {

  const test = await axios.get("/api/public-key")
  console.log(test)

  return (
    <main className={styles.main}>
      <div>testPage</div>
    </main>
  );
}
