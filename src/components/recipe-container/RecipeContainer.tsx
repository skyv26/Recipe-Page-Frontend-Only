import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import RecipeImage from "../recipe-image/RecipeImage";
import { RecipeContainerProps } from "../../types/recipe-app-types";
import RecipeDetail from "../recipe-detail/RecipeDetail";
import Ingredients from "../ingredients/Ingredients";
import Instructions from "../instructions/Instructions";
import Nutrition from "../nutrition/Nutrition";

const RecipeContainer: React.FC<RecipeContainerProps> = ({currentIndex}) => {
  const { recipes, loading, error } = useContext(RecipeContext);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if(!recipes) return <></>;
  return <>
    <RecipeImage recipeImg={recipes[currentIndex]?.img} className="!w-full !h-[171px] !object-fill"  />
    <div className="p-5 min-[375px]:px-8 min-[375px]:py-7 bg-white">
      <RecipeDetail recipeName={recipes[currentIndex]?.recipeName} recipeDescription={recipes[currentIndex]?.description} preparationTime={recipes[currentIndex]?.preparationTime} />
      <Ingredients ingredients={recipes[currentIndex]?.ingredients} />
      <Instructions instructions={recipes[currentIndex]?.instructions} />
      <Nutrition nutrition={recipes[currentIndex]?.nutrition} />
    </div>
  </>
}

export default RecipeContainer