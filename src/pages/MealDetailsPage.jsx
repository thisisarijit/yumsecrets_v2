import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MealSingle from "../components/MealSingle";
import { useMealContext } from "../context/mealContext";
import { startFetchSingleMeal } from "../actions/mealsActions";
import Loader from "../components/Loader";

const MealDetailsPage = () => {
  const { id } = useParams();
  const { dispatch, meal, mealLoading } = useMealContext();

  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id, dispatch]);

  let ingredientsArr = [],
    measuresArr = [],
    singleMeal = {};

  if (meal && meal.length > 0) {
    for (let key in meal[0]) {
      if (key.includes("strIngredient") && meal[0][key]) {
        ingredientsArr.push(meal[0][key]);
      }

      if (key.includes("strMeasure")) {
        const val = meal[0][key];
        if (val && val.trim().length > 0) {
          measuresArr.push(val);
        }
      }
    }

    singleMeal = {
      id: meal[0].idMeal,
      title: meal[0].strMeal,
      category: meal[0].strCategory,
      area: meal[0].strArea,
      thumbnail: meal[0].strMealThumb,
      instructions: meal[0].strInstructions,
      source: meal[0].strSource,
      tags: meal[0].strTags,
      youtube: meal[0].strYoutube,
      ingredients: ingredientsArr,
      measures: measuresArr,
    };
  }

  return (
    <main className="bg-gray-100 py-6">
      {mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
    </main>
  );
};

export default MealDetailsPage;
