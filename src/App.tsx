import { useState } from "react";
// import { useSwipeable } from "react-swipeable";
import RecipeContainer from "./components/recipe-container/RecipeContainer";
import SwipeComponent from "./utils/SwipeableComponent";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  return <SwipeComponent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
      <RecipeContainer currentIndex={currentIndex} />
    </SwipeComponent>
} 
  

export default App;