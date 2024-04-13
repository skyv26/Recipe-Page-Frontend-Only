import { Typography } from "antd";

const { Title } = Typography;

const Instructions = ({ instructions }: {
  instructions: string[]
}) => {
  return (
    <>
    <Title level={3}>Instructions</Title>
    <ol className="list-decimal pl-4">
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