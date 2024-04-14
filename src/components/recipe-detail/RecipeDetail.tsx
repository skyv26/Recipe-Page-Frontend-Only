import { Typography } from "antd";

import { RecipeDetailProps } from "../../types/recipe-app-types";

const { Title } = Typography;

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipeName,
  recipeDescription,
  preparationTime,
}) => {
  return (
    <div className="flex flex-col">
      <Title level={1} className="font-young_serif">
        {recipeName}
      </Title>
      <p className="font-outfit">{recipeDescription}</p>
      <div>
        <p className="font-outfit">Preparation time</p>
        <ul className="list-disc pl-4 font-outfit">
          {Object.entries(preparationTime).map(([key, value]) => (
            <li key={key}>
              <b>{key.charAt(0).toUpperCase() + key.slice(1)}</b>: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
