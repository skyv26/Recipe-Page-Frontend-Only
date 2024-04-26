import { Table, Typography } from "antd";
import { NutritionProps } from "../../types/recipe-app-types";
const { Title } = Typography;

const Nutrition = ({ nutrition }: { nutrition: NutritionProps }) => {

  console.log(nutrition)
  // Define columns for the Ant Design Table
  const columns = [
    {
      title: "Nutrient",
      dataIndex: "name",
      className: '!text-base font-outfit text-stone600',
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
      className: 'font-outfit text-brown800 font-bold !text-base',
      key: "value",
    },
  ];

  // Transform the nutrition object into an array of { name, value }
  const data = Object.entries(nutrition).map(
    ([key, value], index) => ({
      key: index,
      name: key.charAt(0).toUpperCase() + key.slice(1), // Capitalize the first letter of the key
      value: value,
    })
  );

  return (
    <div className="mt-5 flex flex-col min-[375px]:mt-6 pb-5 min-[375px]:pb-8 min-[375px]:gap-1 min-[580px]:pb-0">
      <Title className='font-young_serif !font-normal !text-brown800 !text-[28px]' level={4}>Nutrition</Title>
      <p className="font-outfit text-stone600">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <Table className="nutrition-table min-[375px]:px-4" size="small" dataSource={data} showHeader={false} columns={columns} pagination={false} />
    </div>
  );
};

export default Nutrition;
