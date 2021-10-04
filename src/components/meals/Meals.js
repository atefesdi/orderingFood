import React, {Fragment} from "react";
import MealSummry from "./MealSummry";
import MealsAvailabel from "./MealsAvailabel";

const Meals =()=>{
    return(
        <Fragment>
           <MealSummry/>
           <MealsAvailabel/>
        </Fragment>
    );
}
export default Meals;