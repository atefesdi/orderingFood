import React , {useEffect , useState} from "react";
import styles from "./MealsAvailabel.module.css";
import Meal from "./Meal";
import Card from "../UI/Card";



const MealsAvailabel =()=>{

  const [ meals , setMeals] = useState([])
  const [isLoading , setIsloading] = useState(true)

  useEffect(()=>{
    async function fetchMeals(){
      setIsloading(true)
      const response = await fetch('https://react-html-b467d-default-rtdb.firebaseio.com/meals.json');
      const data = await response.json();

      const mealsArr =[];
      // console.log(data)

      for (const key in data) {
        mealsArr.push({
          id : key,
          name : data[key].name,
          description : data[key].description,
          image : data[key].image,
          price : data[key].price,
        })
      }
      setMeals(mealsArr)
      
      setIsloading(false)
    }
    fetchMeals();
  }, [])

 if (isLoading) {
   return(
     <section>
       <p>is loading...</p>
     </section>
   );
 }
 console.log(isLoading)

  console.log(meals)
    const mealsList = meals.map(meal =>
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
          <Card >  <ul className={styles.container}> {mealsList} </ul>
          
          </Card>
        </section>   
    )
}
export default MealsAvailabel