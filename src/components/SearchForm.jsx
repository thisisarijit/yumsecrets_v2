import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useMealContext } from "../context/mealContext";
import { useNavigate } from "react-router-dom";
import { startFetchMealsBySearch } from "../actions/mealsActions";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { dispatch } = useMealContext();

  const handleSearchTerm = (e) => {
    e.preventDefault();
    const cleanValue = e.target.value.replace(/[^\w\s]/gi, "");
    if (cleanValue.length !== 0) {
      setSearchTerm(e.target.value);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid search term ...");
    }
  };

  const handleSearchResult = (e) => {
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchTerm);
  };

  return (
    <form
      className="flex items-center flex-wrap justify-center"
      onSubmit={handleSearchResult}
    >
      <input
        type="text"
        className="shadow-[0_4px_10px_rgb(0_0_0/12%),_0_0_1px_rgb(0_0_0/5%)_inset] min-w-[200px] text-[#434343] text-[16px] h-[55px] px-8 rounded-full mr-4 mb-4 focus:outline-none"
        placeholder="Search your recipe here..."
        onChange={handleSearchTerm}
      />

      <button
        type="submit"
        className="w-[55px] h-[55px] bg-[#123c69] rounded-full relative transition-all hover:bg-white group"
      >
        <BsSearch
          className="text-white group-hover:scale-90 group-hover:text-[#3a9691] transition-transform duration-300 mx-auto"
          size={20}
        />
        <span className="absolute inset-0 border border-[#eee2dc] rounded-full pointer-events-none" />
      </button>
    </form>
  );
};

export default SearchForm;
