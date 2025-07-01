import React from 'react'
import { FaUtensilSpoon } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { BiChevronsRight } from 'react-icons/bi'
import { AiOutlineCheckSquare } from 'react-icons/ai'

const MealSingle = ({ meal }) => {
  let tags = meal?.tags?.split(',')
  let instructions = meal?.instructions?.split('\r\n')
  instructions = instructions?.filter((instruction) => instruction.length > 1)

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-orange-500 text-white rounded px-4 py-2 mb-6">
          <ul className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="flex items-center">
                <AiFillHome size={22} />
              </Link>
            </li>
            <li>
              <BiChevronsRight size={23} />
            </li>
            <li className="uppercase font-medium tracking-wider">
              {meal?.title}
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Meal Details</h2>

        <section className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="min-h-[420px] border border-gray-200 overflow-hidden rounded">
              <img
                src={meal?.thumbnail}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-orange-500 border-b border-orange-500 pb-2">
                {meal?.title}
              </h3>
              <div>
                <span className="uppercase font-bold tracking-wide">Category:&nbsp;</span>
                <span className="uppercase tracking-wider">{meal?.category}</span>
              </div>

              <div>
                <span className="font-semibold">Source: </span>
                <a
                  href={meal?.source}
                  className="hover:text-orange-500 underline"
                >
                  {meal.source
                    ? meal.source.substring(0, 40) + '...'
                    : 'Not found'}
                </a>
              </div>

              <div>
                <h6 className="text-base font-semibold">Tags:</h6>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {tags?.map((tag, idx) => (
                    <li
                      key={idx}
                      className="text-sm px-2 py-1 border border-orange-500 rounded text-orange-500"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-500 text-white p-4 mt-4 rounded">
                <h6 className="text-base font-semibold">Ingredients with Measurement</h6>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 mt-3">
                  {meal?.ingredients?.map((ingredient, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm font-medium"
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold bg-green-600 border border-white mr-2 shadow">
                        {idx + 1}
                      </span>
                      <span className="capitalize">
                        {`${ingredient} : ${meal.measures[idx]}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h6 className="text-base font-semibold mb-4">Instructions:</h6>
            <ul className="space-y-4">
              {instructions?.map((instruction, idx) => (
                <li key={idx} className="grid grid-cols-[28px_auto] items-start gap-2">
                  <AiOutlineCheckSquare
                    size={18}
                    className="text-orange-500 mt-1"
                  />
                  <span className="text-base font-medium text-gray-700">
                    {instruction}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MealSingle;
