import React, { Fragment, useContext, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";

const CartBckg = (props) => {
  return <div className={styles.CartBckgStyle} onClick={props.onHidden}></div>;
};

const CartItems = (props) => {
  const [cartHide, setCardHide] = useState(false);
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const order = ctx.items.length > 0;

  const addItemtoCart = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };
  const removeItemtoCart = (id) => {
    ctx.removeItem(id);
  };
  const cartitem = (
    <ul>
      {ctx.items.map((item) => (
        <li>
          <CartIcon
            name={item.name}
            price={item.price}
            amount={item.amount}
            id={item.id}
            key={Math.random().toString}
            price={item.price}
            onAdd={addItemtoCart.bind(null, item)}
            onRemove={removeItemtoCart.bind(null, item.id)}
          />
        </li>
      ))}
    </ul>
  );

  const orderbtnHandler = () => {
    setCardHide(true);
  };
  const mylovelyBtn = (
    <div className={styles.btnStyles}>
      <button onClick={props.onHidden}>Close</button>
      {order && <button onClick={orderbtnHandler}>Order</button>}
    </div>
  );
  const submitOrderHandler =(dataUser)=>{
    fetch("https://react-html-b467d-default-rtdb.firebaseio.com/order.json" , {
      method :"post",
      body : JSON.stringify({
        user : dataUser ,
        orderItems : ctx.items,
      })
    })
  }

  return (
    <div className={styles.CardItemsStyle}>
      <div>{cartitem}</div>
      <div className={styles.totalStyle}>
        <h2>Total Amount : {totalAmount}</h2>
      </div>
      {cartHide && <Checkout submitOrderHandler={submitOrderHandler} onHidden={props.onHidden} />}
      {!cartHide && mylovelyBtn}
    </div>
  );
};

const Cart = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartBckg onHidden={props.onHidden} />,
        document.getElementById("root__bckg__Cart")
      )}
      {ReactDOM.createPortal(
        <CartItems onHidden={props.onHidden} />,
        document.getElementById("root__bckg__Cart")
      )}
    </Fragment>
  );
};
export default Cart;
