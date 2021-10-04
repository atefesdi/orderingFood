import React from "react";
import styles from "./MealsAvailabel.module.css";
import Meal from "./Meal";
import Card from "../UI/Card";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      image : "https://images.pexels.com/photos/3535392/pexels-photo-3535392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80",
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      image : "https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      image: "https://images.pexels.com/photos/4553029/pexels-photo-4553029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      price: 18.99,
    },
  ];

const MealsAvailabel =()=>{

    const mealsList = DUMMY_MEALS.map(meal =>
         <Meal 
            id={meal.id}
            name={meal.name}
            description ={meal.description}
            price ={meal.price}
            key={Math.random().toString}
            image ={meal.image}
         />)
    return(
        <section className={styles.aveilMealStyle}>
          <Card >  <ul className={styles.container}> {mealsList} </ul></Card>
        </section>   
    )
}
export default MealsAvailabel