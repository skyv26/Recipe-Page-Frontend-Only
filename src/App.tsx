import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import RecipeContainer from "./components/recipe-container/RecipeContainer";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev: number) => {
      if(prev > 9) {
        return 10;
      }
      return prev + 1;
    })},
    onSwipedRight: () => {
      setCurrentIndex((prev: number) => {
        if(prev <= 0) {
          return 0;
        }
        return prev - 1;
      })
    }
  });
  
  return <div {...handlers} className="w-full h-screen bg-red-300">
    <RecipeContainer currentIndex={currentIndex} />
  </div> 
} 
  

export default App;