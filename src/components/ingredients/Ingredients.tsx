import { Typography } from 'antd';

const { Title } = Typography;

const Ingredients = ({ingredients}: {ingredients: string[]}) => {
  return (
    <>
      <Title level={2}>Ingredients</Title>
      <ul className="list-disc pl-4">
        {
          ingredients.map((each, index) => <li key={index}>{each}</li>)
        }
      </ul>
    </>
  )
}

export default Ingredients;