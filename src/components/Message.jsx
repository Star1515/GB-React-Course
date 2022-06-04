import React from "react";
import styles from './Message.module.css';

const Message = (props) => {
    return (

        <div className={styles.all}>
            <div className={styles.wrapper}>
                {props.message}
            </div>
        </div>

    )
};

export default Message;