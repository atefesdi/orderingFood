import React, {Fragment , useContext , useState} from "react"
import ReactDOM from "react-dom"
import styles from "./Cart.module.css"
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";
import Card from "../UI/Card";


const CartBckg=props =>{
    return(
    <div className={styles.CartBckgStyle} onClick={props.onHidden}>
    </div>
    )
}

const CartItems = props =>{
    
    const ctx = useContext(CartContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`

    const order = ctx.items.length >0
    

    const addItemtoCart = item =>{ctx.addItem({...item , amount:1})}
    const removeItemtoCart = id =>{ctx.removeItem(id)}
    const cartitem = <ul>{
        ctx.items.map(
            (item)=><li>
                <CartIcon
                name = {item.name}
                price={item.price}
                amount ={item.amount}
                id ={item.id}
                key= {Math.random().toString}
                price ={item.price}
                onAdd={addItemtoCart.bind(null , item)}
                onRemove={removeItemtoCart.bind(null , item.id)}
            />
            </li>
        )   
        }</ul>

       
    return(
        <div className={styles.CardItemsStyle}>
        <div>{cartitem}</div>
        <div className={styles.totalStyle}>
            <h2>Total Amount : {totalAmount}</h2> 
            
        </div>
        <div className={styles.btnStyles}>
            <button onClick={props.onHidden}>Close</button>
             { order && <button>Order</button>}
        </div>
       </div>
    )
}



const Cart = (props) =>{
    
    return(
        <Fragment>
            {ReactDOM.createPortal(<CartBckg onHidden={props.onHidden}/> , document.getElementById("root__bckg__Cart"))}  
            {ReactDOM.createPortal(< CartItems onHidden={props.onHidden} /> , document.getElementById("root__bckg__Cart"))}
        </Fragment>
        
    )
}
export default Cart;