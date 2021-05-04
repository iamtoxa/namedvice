import styles from "./NavBar.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import mockData from 'Mocks/components/NavBar.js';

function NavBar(props = mockData) {
  const router = useRouter()

  const [opened, setOpened] = useState(false);

  const handleToggle = ()=>{
    setOpened(!opened)
  }

  return (
    <>
    <div className={`${styles.toggle_btn} ${opened ? styles.opened : ""}`} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={`${styles.NavBar} ${opened ? styles.opened : ""}`}>
      {mockData.items?.map((item, index)=>{
        return <Link key={index} href={item.link}>
          <a onClick={handleToggle} className={`${styles.link} ${router.asPath == item.link ? styles.active : ""}`}>
            {item.caption}
          </a>
        </Link>
      })}
    </div>
    </>
  );
}

export default NavBar;
