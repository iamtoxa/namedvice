import styles from "./Footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Footer(props) {
  const router = useRouter();

  return (
    <div className={styles.Footer}>
      <span>
        {"MADE BY "}
        <Link href={"https://m-dev.studio"}>
          <a className={styles.studio}>M.DEV</a>
        </Link>
      </span>
      <div className={styles.langs}>
        <Link href={"/ru/home"}>
          <a
            className={`${styles.lang} ${
              props.pageLang == "ru" ? styles.active : ""
            }`}
          >
            RU
          </a>
        </Link>
        <Link href={"/en/home"}>
          <a
            className={`${styles.lang} ${
              props.pageLang == "en" ? styles.active : ""
            }`}
          >
            EN
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
