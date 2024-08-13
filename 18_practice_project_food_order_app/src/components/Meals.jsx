// import { useState, useEffect } from "react";
import MealItem from "./MealItem";
import Error from "./Error";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  // const [loadedMeals, setLoadedMeals] = useState([]);
  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');
  
  //     if (!response.ok) {
  //       // ...
  //     }
  
  //     const meals = await response.json();
  //     setLoadedMeals(meals);Meals(meals);
  //   }
  
  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals, 
    isLoading, 
    error
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  console.log(loadedMeals);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return <ul id="meals">{loadedMeals.map(meal => (
    <MealItem key={meal.item} meal={meal}></MealItem>
  ))}</ul>
}