import React from "react";
import { useMealContext } from "../context/mealContext";
import Loader from "../components/Loader";
import CategoryList from "../components/CategoryList";
import NotFound from "../components/NotFound";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";

const HomePage = () => {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();

  return (
    <main className="py-8">
      {/* Header Content  */}
      <div className="text-center flex flex-col items-center justify-center px-4">
        {/* Parent Section */}
        <div className="flex flex-wrap justify-between w-full mb-4 min-h-fit">
          {/* Left Background Animation */}
          <div className="min-w-[320px] min-h-[200px] flex-1 p-2 animate-slideBg"></div>

          {/* Right Text Content */}
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

      {/* Meals List or Loading/NotFound */}
      {mealsLoading ? (
        <Loader />
      ) : meals === null ? (
        <NotFound />
      ) : meals?.length ? (
        <MealList meals={meals} />
      ) : (
        ""
      )}

      {/* Categories */}
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default HomePage;
