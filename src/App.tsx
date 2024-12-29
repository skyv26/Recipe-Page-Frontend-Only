import { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";
import Footer from "./components/footer/Footer";
import RecipeContainer from "./components/recipe-container/RecipeContainer";
import SwipeComponent from "./utils/SwipeableComponent";
import RecipeDropDown from "./components/RecipeDropDown/RecipeDropDown";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDropDown(true);
    }, 5000); // 10 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return <SwipeComponent currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}>
      {
        showDropDown &&
      <RecipeDropDown currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      }
      <RecipeContainer currentIndex={currentIndex} />
      <Footer />
    </SwipeComponent>
} 
  

export default App;