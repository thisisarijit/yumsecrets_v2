import React from 'react'
import { useSidebarContext } from '../context/sidebarContext'
import { ImCancelCircle } from 'react-icons/im'
import { Link } from 'react-router-dom'
import { useMealContext } from '../context/mealContext'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext()
  const { categories } = useMealContext()

  return (
    <nav
      className={`fixed top-0 right-0 h-full w-full max-w-[280px] bg-white z-[1000] p-6 shadow-xl transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        type='button'
        className='absolute top-6 right-6 text-orange-500 hover:text-gray-800 transition-colors duration-300'
        onClick={closeSidebar}
      >
        <ImCancelCircle size={24} />
      </button>

      <div className='mt-16'>
        <ul className='space-y-4'>
          <li key='login' className='border-b border-black/5 pb-1'>
            <Link
              to='/register'
              className='tracking-wider text-sm font-semibold hover:text-orange-500 transition-colors'
              onClick={closeSidebar}
            >
              Login / Sign up
            </Link>
          </li>

          {categories.map((category) => (
            <li
              key={category.idCategory}
              className='border-b border-black/5 pb-1'
            >
              <Link
                to={`/meal/category/${category.strCategory}`}
                className='tracking-wide text-xs hover:text-orange-500 transition-colors'
                onClick={closeSidebar}
              >
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
