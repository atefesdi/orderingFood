import React   from "react";

import styles from "./CartIcon.module.css";

const CartIcon =props =>{

    return (
        <div className={styles["cartIcon__style"]}>
            <div className={styles.infoFood}>
            {props.name}   
            <label>{props.amount}</label>
            <label>{props.price}</label>
            </div>
            <div className={styles.btnStyles}>
            <button onClick={props.onAdd}>+</button>
            <button onClick={props.onRemove}>-</button>
            </div>
        </div>
    )
}
export default CartIcon