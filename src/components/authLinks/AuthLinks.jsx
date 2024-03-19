"use client";


import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useState } from "react";

const AuthLinks = () => {

  const[open, setOpen] = useState(false)

  const status = "notautenticated";

  return (
    <>
      {status === "notautenticated" ? (
      <Link href="/login">Login</Link>
    ) : (
      <>
        <Link href="/write" className={styles.link}>Logout</Link>
        {<span className={styles.link}>Logout</span>}
      </>
      ) }

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <dive className={styles.line}></dive>
        <dive className={styles.line}></dive>
        <dive className={styles.line}></dive>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>

        </div>
      )}
    </>
  );
};

export default AuthLinks;
