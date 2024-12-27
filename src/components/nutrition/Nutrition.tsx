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
      key: "name",
    },
    {
      title: "Value",
      dataIndex: "value",
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

  console.log(data)

  return (
    <div>
      <Title level={4}>Nutrition</Title>
      <p>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <Table dataSource={data} showHeader={false} columns={columns} pagination={false} />
    </div>
  );
};

export default Nutrition;
