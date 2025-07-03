import MealList from "../components/MealList";
import axios from "../api/axios";
import { MEAL_CATEGORIES_URL, CATEGORIES_URL } from "../utils/constants";
import { useLoaderData } from "react-router-dom";

const CategoryPage = () => {
  const { name, categoryMeals, catDescription } = useLoaderData();

  return (
    <main className="py-5">
      <div className="">
        <div className="bg-black/5 border border-orange-500 px-4 py-4 rounded-md">
          <h2 className="text-orange-500 font-extrabold text-xl capitalize">
            {name}
          </h2>
          <p className="text-base opacity-70 mt-3">{catDescription}</p>
        </div>
      </div>

      {categoryMeals?.length > 0 && <MealList meals={categoryMeals} />}
    </main>
  );
};


export async function categoryLoader({ params }) {
  const category = params.name;

  // Fetch meals by category
  const mealsRes = await axios.get(`${MEAL_CATEGORIES_URL}${category}`);
  const categoryMeals = mealsRes.data.meals;

  // Fetch all categories to find the description
  const categoriesRes = await axios.get(CATEGORIES_URL);
  const categories = categoriesRes.data.categories;

  const selectedCategory = categories.find(
    (cat) => cat.strCategory === category
  );

  const catDescription = selectedCategory?.strCategoryDescription ?? "";

  return {
    name: category,
    categoryMeals,
    catDescription,
  };
}

export default CategoryPage;
