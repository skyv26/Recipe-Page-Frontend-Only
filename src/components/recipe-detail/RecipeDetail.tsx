import { Typography } from "antd";

import { RecipeDetailProps } from "../../types/recipe-app-types";

const { Title } = Typography;

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipeName,
  recipeDescription,
  preparationTime,
}) => {
  return (
    <div className="flex flex-col mt-3 gap-4 min-[375px]:mt-10 min-[375px]:gap-8">
      <div className="flex flex-col gap-2 min-[375px]:gap-6">
        <Title level={1} className="font-young_serif !text-stone900 !text-[30px]">
          {recipeName}
        </Title>
        <p className="font-outfit text-stone600 text-base">{recipeDescription}</p>
      </div>
      <div className="bg-rose50 p-6 flex flex-col gap-4">
        <p className="font-outfit font-bold text-rose800">Preparation time</p>
        <ul className="flex flex-col gap-2 list-disc pl-4 font-outfit marker:text-rose800">
          {Object.entries(preparationTime).map(([key, value]) => (
            <li className="text-stone600 pl-4" key={key}>
              <b>{key.charAt(0).toUpperCase() + key.slice(1)}</b>: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
