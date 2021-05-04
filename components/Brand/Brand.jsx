import styles from "./Brand.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Brand(props) {
  const router = useRouter();

  return (
    <Link href={"/home"}>
      <a className={`${styles.Brand} ${router.asPath != '/home' ? styles.small : ""}`}>
          Namedvice
      </a>
    </Link>
  );
}

export default Brand;
