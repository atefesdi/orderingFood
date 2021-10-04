import React ,{useReducer} from "react";
import CartContext from "./CartContext";


const defultCartReducer = {
    items : [] ,
    totalAmount : 0
}

const cartReducer = (state , action)=>{
    if(action.type === "ADD"){
        
        const updateTotalAmount = state.totalAmount + (action.item.amount * action.item.price)

        const existingCartitemIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingCartitem = state.items[existingCartitemIndex];

        let updateItem;
        let updateItems;
        if(existingCartitem){
            updateItem = 
                {...existingCartitem ,
                amount: existingCartitem.amount + action.item.amount};
            updateItems = [...state.items]
            updateItems[existingCartitemIndex]= updateItem;
        }else{
            updateItems = state.items.concat(action.item)
        }
        return{
            items :updateItems,
            totalAmount : updateTotalAmount
        }
    }
    if (action.type === "REMOVE") {
        const existingCartitemIndex = state.items.findIndex(item => item.id === action.id)
        let existingCartitem = state.items[existingCartitemIndex];
        const updateTotalAmount = state.totalAmount - existingCartitem.price
        let updateItems = [...state.items]

        if (existingCartitem.amount === 1) {
            
            updateItems =   state.items.filter(item=> item.id !== action.id )
        }else {
             existingCartitem = {...existingCartitem , amount : existingCartitem.amount - 1}
             updateItems[existingCartitemIndex]= existingCartitem
        }
        return{
            items :updateItems,
            totalAmount : updateTotalAmount  
        }

    }
    return defultCartReducer
}

const Cartprovider = props =>{

    const [cartState , dispatchCart] = useReducer (cartReducer , defultCartReducer);

    
    const addItemToCartHandler = item =>{
        dispatchCart({type:"ADD" , item: item})
    }
    const removeItemFromCartHandler = id =>{
        dispatchCart({type:"REMOVE" , id:id})
    }

    const cartContext = {
        items : cartState.items,
        totalAmount : cartState.totalAmount , 
        addItem : addItemToCartHandler,
        removeItem : removeItemFromCartHandler,
    };

    console.log(cartContext.items)

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default Cartprovider;