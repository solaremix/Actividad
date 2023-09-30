import React from "react";

import styles from "./page.module.css";
import Login from "./components/Login";
import TermsAndConditions from "./components/TermsAndConditions";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ACTIVIDAD</h1>
      <Login />
      <TermsAndConditions />
    </main>
  );
}
