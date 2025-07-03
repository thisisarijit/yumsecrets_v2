
import React from "react";
import CategoryList from "../components/CategoryList";
import NotFound from "../components/NotFound";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";
import axios from "../api/axios";
import { CATEGORIES_URL, SEARCH_URL } from "../utils/constants";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const { categories, meals } = useLoaderData();

  return (
    <main className="py-8">
      <div className="text-center flex flex-col items-center justify-center px-4">
        <div className="flex flex-wrap justify-between w-full mb-4 min-h-fit">
          <div className="min-w-[320px] min-h-[200px] flex-1 p-2 animate-slideBg"></div>
          <div className="min-w-[320px] flex-1 p-2 pt-20">
            <h1 className="text-3xl font-bold mb-2">Welcome to YumSecrets</h1>
            <p className="text-base leading-relaxed text-gray-700">
              Cooking is like painting or writing a song. Just as there are only
              so many notes or colors, there are only so many flavors—it’s how
              you combine them that sets you apart!
            </p>
          </div>
        </div>

        <h1 className="text-2xl text-orange-600 font-semibold tracking-wider mt-4">
          What would you like to cook?
        </h1>
        <p className="uppercase text-gray-600 tracking-wide my-2">
          Excellence In Every Dish
        </p>
        <SearchForm />
      </div>
      {meals ? (
        meals.length > 0 ? (
          <MealList meals={meals} />
        ) : (
          <NotFound />
        )
      ) : null}
      <CategoryList categories={categories} />
    </main>
  );
};

export default HomePage;

export async function homeLoader({ request }) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search");

  // Always fetch categories
  const categoriesRes = await axios.get(CATEGORIES_URL);
  const categories = categoriesRes.data.categories;

  // Only fetch meals if search exists
  let meals = null;
  if (search) {
    const mealsRes = await axios.get(`${SEARCH_URL}${search}`);
    meals = mealsRes.data.meals;
  }

  return {
    categories,
    meals,
    searchTerm: "",
  };
}
