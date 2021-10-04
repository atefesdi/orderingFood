import React , {useRef , useState} from "react";
import styles from "./MealsCart.module.css";

const MealsCart =(props)=>{
    const inputRef = useRef()
    const [valueIsValid , setValueIsValid] =useState(true)

    const submitAddMeal = event =>{
        const enterdAmount = inputRef.current.value;
        const enterAmountNumber = + enterdAmount;
        if(enterAmountNumber.length === 0 || enterAmountNumber <1 ||enterAmountNumber >5){
            setValueIsValid(false)
            return
        }
        props.addMeal(enterAmountNumber)
    }

    return(
        
        <div className={styles.MealsCartStyle}>
        <div>
            <p>Amount</p>
            <input  value="1" min="1" max="5" step="1"  ref={inputRef}/>
        </div>
        <button onClick={submitAddMeal}>
        <i className="fa fa-plus"></i> 
        <p>Add</p>   
        </button > 
        {!valueIsValid && <p>enter the valid value</p>} 
        </div>
    )
}
export default MealsCart