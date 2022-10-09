import React from "react";
import styles from "./index.module.css";
const Card = (props) => {
  const {
    src,
    icon,
    content,
    footer,
    optionsAction,
  } = props;
  return ((src || content) && (
      <div className={styles.card}>
        {src && 
          (<div className={styles["img-wrapper"]}>
            <img src="./bg.jpeg" alt="img" />
          </div>)
        }
        <div className={styles["content-wrapper"]}>
          {optionsAction && <div className={styles["option"]} onClick={optionsAction}>{icon || "···"}</div>}
          { content && <div className={styles.content}>{ content }</div> }
          { footer && <div className={styles.footer}>{ footer }</div> }
        </div>
    </div>)
  )
}

export default Card;