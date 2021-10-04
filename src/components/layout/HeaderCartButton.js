import React , {useContext , useState , useEffect} from "react";
import CartContext from "../../store/CartContext";
import styles from "./HeaderCartButton.module.css";
import 'font-awesome/css/font-awesome.min.css';

const  HeaderCartButton =(props)=>{
    const [btnHighlight , setbtnHighlight ] = useState(false)

    const ctx = useContext(CartContext)
    const btnClass = ` ${styles.cartBtnStyle}  ${ btnHighlight ? styles.bump  : ''}`;

    const numberOfMeal = ctx.items.reduce((currentNum , item)=>{
        return currentNum + item.amount
    } , 0)

    let {items} = ctx;

    useEffect(()=>{
        if (items.length ===0) {
            return
        }
            setbtnHighlight(true)
            const timer = setTimeout(()=>{
            setbtnHighlight(false)    
            } , 300)
        
        return()=>{clearTimeout(timer)}
            
        
    } , [items])
    return(
        <button className={btnClass}  onClick={props.onShowcart}>
            <i className="fa fa-shopping-cart" ></i>  
            <p>Your Cart</p>
            <span>{numberOfMeal}</span>
        </button>
    )
}
export default HeaderCartButton;