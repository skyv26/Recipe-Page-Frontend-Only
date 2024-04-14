import { Typography } from "antd";

const { Title } = Typography;

const Instructions = ({ instructions }: {
  instructions: string[]
}) => {
  return (
    <>
    <Title className='font-young_serif' level={3}>Instructions</Title>
    <ol className="list-decimal pl-4 font-outfit">
      {
        instructions.map((each, index) => {
          const [heading, content] = each.split(":");
          return <li key={index}>
            <b>{heading}</b>: {content}
          </li>
        })
      }
    </ol>
    </>
  )
}

export default Instructions;