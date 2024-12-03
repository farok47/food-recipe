import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/GlobalalState";

function Navbar() {
  const {search,setsearch,handlesubmit}=useContext(GlobalContext)
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink className="text-2xl font-semibold" to={"/"}>food recipe</NavLink>

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="enter your name"
          value={search}
          onChange={e=>setsearch(e.target.value)}

          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="gap-5 flex">
       <li>
          <NavLink className={"text-black hover:text-gray-700 duration-300"} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={"text-black hover:text-gray-700 duration-300"} to={"/favorites"}>favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
