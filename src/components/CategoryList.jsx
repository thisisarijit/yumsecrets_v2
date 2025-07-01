import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="py-[80px] bg-[#bab2b5] overflow-x-hidden">
      <div className="max-w-[1320px] px-8 mx-auto flex flex-col justify-center">
        <div className="uppercase mb-12 font-bold tracking-[4px] relative text-[24px] py-1 border-b-4 border-[#123c69] text-center mx-auto">
          categories
        </div>

        <section
          className="
            grid gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {categories.map((category) => {
            const {
              idCategory: id,
              strCategory: title,
              strCategoryThumb: thumbnail,
            } = category;

            return (
              <Link
                to={`/meal/category/${title}`}
                key={id}
                className="
                  relative
                  bg-[#eee2dc]
                  shadow-md
                  rounded
                  mx-auto
                  my-3
                  flex items-center justify-center
                  w-full max-w-[100%]
                "
              >
                <div
                  className="
                    relative h-[200px] w-full flex items-center justify-center border border-red-500
                  "
                >
                  <img
                    src={thumbnail}
                    alt={title}
                    className="
                      p-3 transition-transform duration-300 ease-in-out hover:scale-90
                    "
                  />
                  <div
                    className="
                      absolute bottom-[-3%]
                      bg-[#123c69] text-white
                      px-2 py-[1px]
                      rounded shadow-md
                      opacity-90 transition-all duration-300
                    "
                  >
                    <h3 className="text-[11px] font-semibold tracking-wider uppercase">
                      {title}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export default CategoryList;
