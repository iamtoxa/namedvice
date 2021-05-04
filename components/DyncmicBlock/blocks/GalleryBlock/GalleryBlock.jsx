import styles from "./GalleryBlock.module.scss";
import Gallery from "react-photo-gallery";

function GalleryBlock(props) {
  return (
    <div className={styles.GalleryBlock}>
      <Gallery photos={props.photos} margin={6}/>
    </div>
  );
}

export default GalleryBlock;
