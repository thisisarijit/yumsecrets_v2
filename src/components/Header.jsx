import React from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-[100]">
      <Navbar />
    </header>
  );
};

export default Header;
