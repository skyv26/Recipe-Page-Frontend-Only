import { Select } from "antd"
import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";

interface RecipeDropDownProps {
  currentIndex: number;
  setCurrentIndex: (num: number) => void;
}

const RecipeDropDown: React.FC<RecipeDropDownProps> = ({ currentIndex, setCurrentIndex }) => {
  const { recipes } = useContext(RecipeContext);
  if(!recipes) return <></>;

  const options = recipes.map((each_recipe, index) => {
    return {
        value: index,
        label: each_recipe['recipeName']
    }
  });

  return (
    <Select
      className="absolute top-5 right-5 font-outfit text-stone900 font-semibold"
      value={currentIndex}
      style={{ width: 260 }}
      onChange={(val: number) => setCurrentIndex(val)}
      options={options}
    />
  )
}

export default RecipeDropDown;
