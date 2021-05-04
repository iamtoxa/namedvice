import styles from "./Background.module.scss";
import { useRouter } from "next/router";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import PreloadImage from "react-preload-image";

function Background(props) {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.overlay} ${
          !router.asPath.split('/').includes('home') ? styles.active : ""
        } ${
          props.src[0].type == 'color' ? styles.hidden : ""
        }`}
      ></div>
      <div className={styles.Background}>
        {props.src && (
          <SwitchTransition>
            <CSSTransition
              key={props.src[0].src}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <>
                {props.src[0].type == "video" && (
                  <video src={props.src[0].src} autoPlay loop />
                )}

                {props.src[0].type == "color" && (
                  <div
                    className={styles.solid}
                    style={{
                      background: props.src[0].src,
                    }}
                  />
                )}

                {props.src[0].type == "image" && (
                  <PreloadImage
                    className={styles.image}
                    src={props.src[0].src}
                  />
                )}
              </>
            </CSSTransition>
          </SwitchTransition>
        )}
      </div>
    </>
  );
}

export default Background;
