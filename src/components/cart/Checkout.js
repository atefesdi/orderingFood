import React, {useRef , useState} from "react";
import styles from "./Checkout.module.css";

const Checkout = (props) => {
  const [formIsvalid , setFormIsvalid]= useState({
    name : true,
    street : true, 
    postal : true ,
    city: true,
  });

  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const isEmpty = (value)=>{ return  value.trim() !== ''}
  const isFiveChar = (value)=>{ return value.trim().length === 5}

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enterName = nameRef.current.value ;
    const enterStreet = streetRef.current.value;
    const enterPostal = postalRef.current.value;
    const enterCity = cityRef.current.value;

    const nameIsvalid = isEmpty(enterName);
    const streetIsvalid = isEmpty(enterStreet);
    const postalIsvalid = isFiveChar(enterPostal);
    const cityIsvalid = isEmpty(enterCity)
    
    setFormIsvalid({
      name: nameIsvalid,
      street : streetIsvalid,
      postal : postalIsvalid,
      city : cityIsvalid,
    })

    props.submitOrderHandler({
      name: enterName,
      street : enterStreet,
      postal : enterPostal,
      city: enterCity,
    })
  };

  
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.formStyle}>
        <label htmlFor="name">Name </label>
        <input ref={nameRef} type="text" id="name"></input>
        {!formIsvalid.name && <p>please enter name</p>}
      </div>
      <div className={styles.formStyle}>
        <label htmlFor="street">Street </label>
        <input ref={streetRef} type="text" id="street"></input>
        {!formIsvalid.street && <p > please enter street</p>}
      </div>
      <div className={styles.formStyle}>
        <label htmlFor="postal"> Postal </label>
        <input ref={postalRef} type="text" id="postal"></input>
        {!formIsvalid.postal && <p>please enter 5 character </p>}
      </div>
      <div className={styles.formStyle}>
        <label htmlFor="city">City </label>
        <input ref={cityRef} type="text" id="city"></input>
        {!formIsvalid.city && <p>please enter city </p>}
      </div>

      <div className={styles.btnStyles}>
        <button  onClick={props.onHidden}>cancel</button>
        <button>confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
