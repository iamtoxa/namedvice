import styles from "./AlertBlock.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AlertBlock(props) {
  const router = useRouter();

  return (
    <Link href={props.url}>
      <a className={styles.Link}>
        <img src={props.icon} alt="" />
        <span>{props.text}</span>
      </a>
    </Link>
  );
}

export default AlertBlock;
