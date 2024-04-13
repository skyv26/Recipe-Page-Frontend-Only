import { useContext } from "react";
import { RecipeContext } from "./context/RecipeContext";
import RecipeImage from "./components/recipe-image/RecipeImage";

const App = () => {
  const { recipes, loading, error } = useContext(RecipeContext);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if(!recipes) return <></>;
  return <RecipeImage recipe_img={recipes[0]?.img} className=""  />
};

export default App;