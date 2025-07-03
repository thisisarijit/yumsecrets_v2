import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MealSingle from "../components/MealSingle";
import { useLoaderData } from "react-router-dom";
import axios from "../api/axios";
import { MEAL_SINGLE_URL } from "../utils/constants";


const MealDetailsPage = () => {
  const { id } = useParams();
  const singleMeal = useLoaderData();
  return (
    <main className="bg-gray-100 py-6">
      {/* {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />} */}
      <MealSingle meal={singleMeal} />
    </main>
  );
};

export async function mealDetailsLoader({ params }) {
  const id = params.id;
  const response = await axios.get(`${MEAL_SINGLE_URL}${id}`);
  const meal = response.data.meals?.[0];

  if (!meal) {
    throw new Response("Meal not found", { status: 404 });
  }

  const ingredients = [];
  const measures = [];

  for (let key in meal) {
    if (key.startsWith("strIngredient") && meal[key]) {
      ingredients.push(meal[key]);
    }

    if (key.startsWith("strMeasure") && meal[key]?.trim()) {
      measures.push(meal[key]);
    }
  }

  return {
    id: meal.idMeal,
    title: meal.strMeal,
    category: meal.strCategory,
    area: meal.strArea,
    thumbnail: meal.strMealThumb,
    instructions: meal.strInstructions,
    source: meal.strSource,
    tags: meal.strTags,
    youtube: meal.strYoutube,
    ingredients,
    measures,
  };
}

export default MealDetailsPage;
