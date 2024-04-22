import { Typography } from "antd";

import { RecipeDetailProps } from "../../types/recipe-app-types";

const { Title } = Typography;

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipeName,
  recipeDescription,
  preparationTime,
}) => {
  return (
    <div className="flex flex-col mt-3 gap-4 min-[375px]:gap-8">
      <div className="flex flex-col gap-1">
        <Title level={1} className="font-young_serif !text-stone900 !text-[30px] !font-normal min-[375px]:!text-[2.231rem] !leading-[1.05] md:!text-[40px]">
          {recipeName}
        </Title>
        <p className="font-outfit text-stone600 text-base min-[375px]:tracking-normal">{recipeDescription}</p>
      </div>
      <div className="bg-rose50 rounded-[12px] p-6 min-[375px]:py-5 flex flex-col gap-4 min-[375px]:gap-2">
        <p className="font-outfit font-bold text-rose800 min-[375px]:text-[20px]">Preparation time</p>
        <ul className="flex flex-col gap-2 list-disc pl-4 font-outfit marker:text-rose800 min-[375px]:marker:text-[12px] min-[375px]:pl-6 min-[375px]:gap-2 min-[375px]:text-base">
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
