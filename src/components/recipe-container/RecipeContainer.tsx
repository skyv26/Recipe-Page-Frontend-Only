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
  return <div className="bg-white min-[580px]:rounded-[24px] min-[580px]:p-[40px] min-[580px]:w-10/12 min-[580px]:mx-auto min-[580px]:my-32 min-[1366px]:w-[736px]">
    <RecipeImage recipeImg={recipes[currentIndex]?.img} className="!w-full !min-h-[171px] min-[580px]:!h-auto min-[580px]:rounded-[12px] md:!min-h-[300px]"  />
    <div className="p-5 min-[375px]:px-8 min-[375px]:py-7 bg-white min-[580px]:px-0 md:!p-0 md:mt-10">
      <RecipeDetail recipeName={recipes[currentIndex]?.recipeName} recipeDescription={recipes[currentIndex]?.description} preparationTime={recipes[currentIndex]?.preparationTime} />
      <Ingredients ingredients={recipes[currentIndex]?.ingredients} />
      <Instructions instructions={recipes[currentIndex]?.instructions} />
      <Nutrition nutrition={recipes[currentIndex]?.nutrition} />
    </div>
  </div>
}

export default RecipeContainer