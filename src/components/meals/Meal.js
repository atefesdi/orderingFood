import React ,{useContext } from "react";
import CartContext from "../../store/CartContext";
import MealsCart from "./MealsCart";
import style from "./Meal.module.css";

const Meal =(props)=>{

    const price = `$${props.price.toFixed(2)}`
    const ctx = useContext(CartContext)
    const addMeal = (amount) =>{
        ctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price :props.price
        })
    }

    return(
        <li className={style.mealStyle}>
        <div className={style.imgStyle}><img src={props.image}/></div>
        <div >
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{price}</div>       
        </div>
        <div><MealsCart addMeal={addMeal} /></div>
        </li>
    )
}
export default Meal;