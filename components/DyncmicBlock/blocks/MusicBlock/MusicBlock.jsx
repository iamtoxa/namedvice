import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./MusicBlock.module.scss";


function MusicBlock(props) {
  const [activeSlug, setSlug] = useState(props.playlist[0].slug);

  useEffect(async ()=>{

  }, [activeSlug])

  const handleTrack = (value)=>{
    setSlug(value)
  }

  return (
    <div className={styles.MusicBlock}>
      <div className={styles.playlist} style={{
        '--selected-index': props.playlist.findIndex(el=>el.slug == activeSlug)
      }}>{
        props.playlist?.map((item, index)=>{
          return <button onClick={()=>{handleTrack(item.slug)}} className={`${styles.item} ${activeSlug == item.slug ? styles.active :""}`} key={index}>
            {item.caption}
          </button>
        })
      }</div>

      <div className={styles.track}>
        {(()=>{
          const track = props.playlist.find(el=>el.slug == activeSlug)
          return <>
            <div className={styles.info}>
              <img className={styles.image} src={track.image} alt=""/>

              <div className={styles.props}>
                {track.info?.map((item, index)=>{
                  return <div className={styles.prop} key={index}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.value}>{item.value}</span>
                  </div>
                })}
              </div>

              <div className={styles.actions}>
                <Link target="_blank" href={`https://open.spotify.com/track/${track.spotify_slug}`}><a target="_blank">{props.button.caption}</a></Link>              
              </div>
            </div>
          </>
        })()}
      </div>
    </div>
  );
}

export default MusicBlock;
