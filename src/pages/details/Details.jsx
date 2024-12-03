import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalalState";

function Details() {
  const { id } = useParams();
  const {
    RecipedeatailsData,
    setRecipedeatailsData,
    handleAddToFavorites,
    favoriteList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getrecipeDetails() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await res.json();
      if (data.data) {
        setRecipedeatailsData(data.data);
      }
    }
    getrecipeDetails();
  }, []);
  console.log(RecipedeatailsData);
  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group ">
          <img
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            src={RecipedeatailsData?.recipe.image_url}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font--medium">
          {RecipedeatailsData?.recipe.publisher}
        </span>
        <h3 className="font-bold text-black text-2xl truncate">
          {RecipedeatailsData?.recipe.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorites(RecipedeatailsData?.recipe)}
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inlilne-block shadow-md bg-black text-white"
          >
            {favoriteList.findIndex(
              (item) => item.id === RecipedeatailsData?.recipe.id
            ) === -1
              ? "add to favorites"
              : "remove from favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl text-black font-semibold">ingredients</span>
          <ul className="flex flex-col gap-3">
            {RecipedeatailsData?.recipe.ingredients.map((ingredients) => (
              <li>
                <span className="font-bold text-black text-2xl truncate">
                  {ingredients.quantity} {ingredients.unit}
                </span>
                <span className="font-bold text-black text-2xl truncate">
                  {ingredients.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
