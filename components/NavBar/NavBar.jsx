import styles from "./NavBar.module.scss";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

import mockData from 'Mocks/components/NavBar.js';
import Footer from "Components/Footer/Footer";

function NavBar(props) {

  const data = mockData(props.pageLang);

  const router = useRouter()

  const [opened, setOpened] = useState(false);

  const handleToggle = ()=>{
    setOpened(!opened)
  }

  const handleClose = ()=>{
    setOpened(false)
  }

  return (
    <>
    <div className={`${styles.toggle_btn} ${opened ? styles.opened : ""}`} onClick={handleToggle}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className={`${styles.NavBar} ${opened ? styles.opened : ""}`}>
      {data.items?.map((item, index)=>{
        return <Link key={index} href={`${props.pageLang ? `/${props.pageLang}${item.link}` : item.link}`}>
          <a onClick={handleClose} className={`${styles.link} ${router.asPath == item.link ? styles.active : ""}`}>
            {item.caption}
          </a>
        </Link>
      })}

      <Footer className={styles.footer} pageLang={props.pageLang}/>
    </div>
    </>
  );
}

export default NavBar;
