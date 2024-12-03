import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

function GlobalalState({ children }) {
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const [recipelist, setrecipelist] = useState("");
  const [RecipedeatailsData, setRecipedeatailsData] = useState(null);
  const [favoriteList, setfavoriteList] = useState([]);

  const navigate=useNavigate()

  async function handlesubmit(event) {
    event.preventDefault();
    try {
      setloading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await res.json();
      if (data?.data.recipes) {
        setloading(false);
        setrecipelist(data.data.recipes);
        setsearch("");
        navigate("/")
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }
  function handleAddToFavorites(getcurrentitem) {
    let cpyfavoriteList = [...favoriteList];
    const index = cpyfavoriteList.findIndex(
      (item) => item.id === getcurrentitem.id
    );
    if (index === -1) {
      cpyfavoriteList.push(getcurrentitem);
    } else {
      cpyfavoriteList.splice(index);
    }
    setfavoriteList(cpyfavoriteList);

  }
  console.log(favoriteList,"recipelist");

  return (
    <GlobalContext.Provider
      value={{
        search,
        setsearch,
        handlesubmit,
        handleAddToFavorites,
        favoriteList,
        loading,
        recipelist,
        RecipedeatailsData,
        setRecipedeatailsData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalalState;
