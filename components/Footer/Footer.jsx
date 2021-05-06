import styles from "./Footer.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Footer(props) {
  const router = useRouter();

  const pageSlug = router.asPath.split('/').filter((val,index)=>{
    return index>1 && !!val
  }).join('/')

  return (
    <div className={`${props.className} ${styles.Footer}`}>
      <span>
        {"MADE BY "}
        <Link href={"https://m-dev.studio"}>
          <a className={styles.studio}>M.DEV</a>
        </Link>
      </span>
      <div className={styles.langs}>
        <Link href={`/ru/${pageSlug}`}>
          <a
            className={`${styles.lang} ${
              props.pageLang == "ru" ? styles.active : ""
            }`}
          >
            RU
          </a>
        </Link>
        <Link href={`/en/${pageSlug}`}>
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
