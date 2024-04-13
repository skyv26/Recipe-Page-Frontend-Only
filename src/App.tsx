import { useState } from "react";
// import { useSwipeable } from "react-swipeable";
import RecipeContainer from "./components/recipe-container/RecipeContainer";
import SwipeComponent from "./utils/SwipeableComponent";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => {
  //     setCurrentIndex((prev: number) => {
  //     if(prev > 9) {
  //       return 10;
  //     }
  //     return prev + 1;
  //   })},
  //   onSwipedRight: () => {
  //     setCurrentIndex((prev: number) => {
  //       if(prev <= 0) {
  //         return 0;
  //       }
  //       return prev - 1;
  //     })
  //   }
  // });
  
  return <SwipeComponent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
      <RecipeContainer currentIndex={currentIndex} />
    </SwipeComponent>
} 
  

export default App;