import React from "react";
import { Link, useNavigate } from "react-router-dom";

function RecipeItem({ item }) {

  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
        <img src={item.image_url} className="block w-full" />
      </div>
      <div>
        <span className="text-sm text-cyan-700 font--medium">
          {item.publisher}
        </span>
        <h3 className="font-bold text-black text-2xl truncate">{item.title}</h3>
        <Link  
          to={`recipe-item/${item.id}`}
          className="text-sm p-3 px-8 rounded-lg mt-5 uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
        >recipe details</Link>
      </div>
    </div>
  );
}

export default RecipeItem;
