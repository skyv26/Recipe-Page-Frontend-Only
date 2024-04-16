import { Typography } from "antd";

const { Title } = Typography;

const Instructions = ({ instructions }: {
  instructions: string[]
}) => {
  return (
    <div className="mt-5 min-[375px]:mt-8 border-b pb-5 min-[375px]:pb-8">
    <Title className='font-young_serif !text-brown800' level={3}>Instructions</Title>
    <ol className="list-decimal flex flex-col gap-2 pl-4 font-outfit marker:text-brown800 marker:!font-bold">
      {
        instructions.map((each, index) => {
          const [heading, content] = each.split(":");
          return <li className="text-stone600 pl-4" key={index}>
            <b className="font-bold">{heading}</b>: {content}
          </li>
        })
      }
    </ol>
    </div>
  )
}

export default Instructions;