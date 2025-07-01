import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center capitalize">meals</h2>
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {meals?.map((mealItem) => {
            const {
              idMeal: id,
              strArea: area,
              strCategory: category,
              strMeal: meal,
              strMealThumb: thumbnail,
            } = mealItem;

            return (
              <Link
                to={`/meal/${id}`}
                key={id}
                className="rounded-md overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition duration-200 bg-white flex flex-col"
              >
                <div className="relative">
                  <img src={thumbnail} alt={meal} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 right-3 bg-white text-orange-500 font-semibold text-xs px-3 py-1 rounded-full shadow">
                    {category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 font-medium mb-1">{area}</div>
                  <div className="text-base font-semibold text-gray-700 line-clamp-1">{meal}</div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default MealList;