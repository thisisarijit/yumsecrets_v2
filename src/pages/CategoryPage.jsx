import React, { useEffect } from 'react'
import { useMealContext } from '../context/mealContext'
import MealList from '../components/MealList'
import { useParams } from 'react-router-dom'
import { startFetchMealByCategory } from '../actions/mealsActions'

const CategoryPage = () => {
  const { name } = useParams()
  const { categoryMeals, dispatch, categories } = useMealContext()
  let catDescription = ""

  if (categories) {
    categories.forEach((category) => {
      if (category?.strCategory === name)
        catDescription = category?.strCategoryDescription
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name)
  }, [name, dispatch])

  return (
    <main className='py-5'>
      <div className=''>
        <div className='bg-black/5 border border-orange-500 px-4 py-4 rounded-md'>
          <h2 className='text-orange-500 font-extrabold text-xl capitalize'>{name}</h2>
          <p className='text-base opacity-70 mt-3'>{catDescription}</p>
        </div>
      </div>

      {categoryMeals?.length > 0 && <MealList meals={categoryMeals} />}
    </main>
  )
}

export default CategoryPage
