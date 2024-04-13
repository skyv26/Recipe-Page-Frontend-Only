import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import RecipeImage from "../recipe-image/RecipeImage";
import { RecipeContainerType } from "../../types/recipe-app-types";

const RecipeContainer: React.FC<RecipeContainerType> = ({currentIndex}) => {
  const { recipes, loading, error } = useContext(RecipeContext);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if(!recipes) return <></>;
  
  return <RecipeImage recipe_img={recipes[currentIndex]?.img} className=""  />
}

export default RecipeContainer