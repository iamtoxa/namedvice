import styles from "./Brand.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Brand(props) {
  const router = useRouter();

  return (
    <div
      className={`${styles.Brand} ${
        !router.asPath.split("/").includes("home") ? styles.small : ""
      }`}
    >
      <Link href={`${props.pageLang ? `/${props.pageLang}/home` : "/home"}`}>
        <a
          className={`${styles.title} ${
            !router.asPath.split("/").includes("home") ? styles.small : ""
          }`}
        >
          <span>Namedvice</span>
        </a>
      </Link>
      <span
        className={`${styles.description} ${
          !router.asPath.split("/").includes("home") ? styles.small : ""
        }`}
      >
        {props.pageLang == "en" ? "author and performer" : "автор и испольнитель"}
      </span>
    </div>
  );
}

export default Brand;
