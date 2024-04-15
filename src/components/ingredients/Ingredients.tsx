import { Typography } from 'antd';

const { Title } = Typography;

const Ingredients = ({ingredients}: {ingredients: string[]}) => {
  return (
    <>
      <Title className='font-young_serif !text-brown800' level={2}>Ingredients</Title>
      <ul className="list-disc pl-4 font-outfit text-stone600 marker:text-brown800">
        {
          ingredients.map((each, index) => <li className="pl-4" key={index}>{each}</li>)
        }
      </ul>
    </>
  )
}

export default Ingredients;