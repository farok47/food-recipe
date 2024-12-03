import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalalState';
import RecipeItem from '../../Recipe-item/RecipeItem';

function Favorites() {
  const {  favoriteList } = useContext(GlobalContext);
  const navigate=useNavigate()

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favoriteList&&favoriteList.length>0 ? (
        favoriteList.map((item,index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black flex justify-center font-extrabold">
            nothing added to favorites
          </p>
        </div>
      )}
    </div>
  );
}

export default Favorites