
import React ,{ Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header =(props)=>{


    return (
        <Fragment >
            <header className={styles.headerStyle}>
                <h2>React Meals</h2>
                <HeaderCartButton onShowcart={props.onShowcart}/>
            </header>
            <div className={styles.imgStyles}>
                <img src="https://images.pexels.com/photos/8753672/pexels-photo-8753672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="header"
                />
            </div>
        </Fragment>
    )
}
export default Header;