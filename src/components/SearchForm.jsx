import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Form, useSearchParams, useNavigation } from "react-router-dom";

const SearchForm = () => {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  // const [searchTerm, setSearchTerm] = useState(searchValue);
  const [searchTerm, setSearchTerm] = useState("");

  const navigation = useNavigation();

  const handleInputChange = (e) => {
    const cleanValue = e.target.value.replace(/[^\w\s]/gi, "");
    setSearchTerm(cleanValue);
  };

  const isSearching =
    navigation.location && navigation.location.search.includes("search");

  return (
    <Form method="get" className="flex items-center flex-wrap justify-center">
      <input
        type="text"
        name="search"
        defaultValue=""
        onChange={handleInputChange}
        className="shadow-[0_4px_10px_rgb(0_0_0/12%),_0_0_1px_rgb(0_0_0/5%)_inset] min-w-[200px] text-[#434343] text-[16px] h-[55px] px-8 rounded-full mr-4 mb-4 focus:outline-none"
        placeholder="Search your recipe here..."
      />

      <button
        type="submit"
        className="w-[55px] h-[55px] bg-[#123c69] rounded-full relative transition-all hover:bg-white group"
        disabled={isSearching}
      >
        <BsSearch
          className="text-white group-hover:scale-90 group-hover:text-[#3a9691] transition-transform duration-300 mx-auto"
          size={20}
        />
        <span className="absolute inset-0 border border-[#eee2dc] rounded-full pointer-events-none" />
      </button>
    </Form>
  );
};

export default SearchForm;
