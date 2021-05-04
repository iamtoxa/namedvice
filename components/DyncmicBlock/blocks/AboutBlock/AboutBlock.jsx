import styles from "./AboutBlock.module.scss";

function AboutBlock(props) {
  return (
    <div className={styles.AboutBlock}>
      {props.blocks?.filter(block => block.content).map((block, index) => {
        return (
          <div className={styles.block}>
            {block.className == 'quote' && <img src="/images/quote.svg" alt="" className={styles.quoteImg}/>}
            <div key={index} className={styles[block.className]}>
              {block.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AboutBlock;
