import { Typography } from 'antd';

const { Title } = Typography;

const Ingredients = ({ingredients}: {ingredients: string[]}) => {
  return (
    <>
      <Title className='font-young_serif' level={2}>Ingredients</Title>
      <ul className="list-disc pl-4 font-outfit">
        {
          ingredients.map((each, index) => <li key={index}>{each}</li>)
        }
      </ul>
    </>
  )
}

export default Ingredients;