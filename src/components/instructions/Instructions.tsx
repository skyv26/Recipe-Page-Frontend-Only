import { Typography } from "antd";

const { Title } = Typography;

const Instructions = ({ instructions }: {
  instructions: string[]
}) => {
  return (
    <>
    <Title className='font-young_serif !text-brown800' level={3}>Instructions</Title>
    <ol className="list-decimal pl-4 font-outfit marker:text-brown800 marker:!font-bold">
      {
        instructions.map((each, index) => {
          const [heading, content] = each.split(":");
          return <li className="text-stone600 pl-4" key={index}>
            <b className="font-bold">{heading}</b>: {content}
          </li>
        })
      }
    </ol>
    </>
  )
}

export default Instructions;