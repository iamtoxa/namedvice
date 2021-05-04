import styles from "./DynamicBlock.module.scss";

import blocks from "./blocks"

function DynBlock(props) {
  return (
    <div className={styles.DynBlock}>
      {
        (()=>{
          const Block = blocks[props.component];
          return <Block {...props.content}/>
        })()
      }
    </div>
  );
}

export default DynBlock;
