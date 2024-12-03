import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalalState";
import RecipeItem from "../../Recipe-item/RecipeItem";

function Home() {
  const { loading, recipelist } = useContext(GlobalContext);

  if (loading){
    return <div>...loading</div>
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipelist ? (
        recipelist.map((item,index) => <RecipeItem item={item} key={index} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black flex justify-center font-extrabold">
            nothing to show ,please enter somthing to search
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
