import styles from "./ContactsBlock.module.scss";
import Link from "next/link"

function ContactsBlock(props) {
  return (
    <div className={styles.ContactsBlock}>
      <div className={styles.socials}>
        {props.socials?.map((item, index)=>{
          return <Link href={item.url} key={index}>
            <a target="_blank" className={styles.social}>
              {item.caption}
            </a>
          </Link>
        })}
      </div>
      <div className={styles.contacts}>
        {props.contacts?.blocks?.map((block, index)=>{
          return <div className={styles.contact_block} key={index}>
            <div className={styles.contact_block_title}>{block.title}</div>
            {block.items?.map((contact, index)=>{
              return <div className={styles.contact} key={index}>
                {contact.content}
              </div>
            })}
          </div>
        })}
      </div>
    </div>
  );
}

export default ContactsBlock;
