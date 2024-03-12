import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notautenticated";

  return (
    <>
      {status === "notautenticated" ? (<Link href="/login">Login</Link>) : (
      <>
        <Link href="/write">Logout</Link>
        
        {/*<span className={styles.link}>Logout</span>*/}
      </>
      ) }
    </>
  );
};

export default AuthLinks;
