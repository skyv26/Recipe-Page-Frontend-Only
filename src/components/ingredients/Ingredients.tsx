import { Typography } from 'antd';

const { Title } = Typography;

const Ingredients = ({ingredients}: {ingredients: string[]}) => {
  return (
    <div className='mt-5 flex flex-col min-[375px]:mt-8 border-b pb-5 min-[375px]:pb-8 min-[375px]:gap-2'>
      <Title className='font-young_serif !text-brown800 !font-normal !text-[28px]' level={2}>Ingredients</Title>
      <ul className="list-disc  pl-4 font-outfit text-stone600 marker:text-brown800 flex flex-col gap-2 min-[375px]:gap-2 min-[375px]:marker:text-[12px] min-[375px]:pl-[23px]">
        {
          ingredients.map((each, index) => <li className="pl-4" key={index}>{each}</li>)
        }
      </ul>
    </div>
  )
}

export default Ingredients;