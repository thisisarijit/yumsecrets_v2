import React from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from "../context/sidebarContext";

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="bg-[#123c69] h-[60px] shadow-md z-[999] transition-all">
      <div className="max-w-[1320px] mx-auto px-4 h-full flex items-center justify-between">
        <Link to="/" className="flex text-white font-bold items-center gap-2 min-w-[150px] min-h-[40px] bg-[url('./logo.png')] bg-center bg-cover bg-no-repeat">
          YumSecrets
        </Link>

        <button
          type="button"
          className="text-white hover:text-gray-200 transition cursor-pointer "
          onClick={() => openSidebar()}
        >
          <IoMdMenu size={27} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
