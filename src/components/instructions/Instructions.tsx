import { Typography } from "antd";

const { Title } = Typography;

const Instructions = ({ instructions }: {
  instructions: string[]
}) => {
  return (
    <div className="mt-5 flex flex-col min-[375px]:mt-7 border-b pb-5 min-[375px]:pb-8 min-[375px]:gap-1">
    <Title className='font-young_serif !text-brown800 !font-normal !text-[28px]' level={3}>Instructions</Title>
    <ol className="list-decimal flex flex-col gap-2 pl-4 font-outfit marker:text-brown800 marker:!font-bold min-[375px]:pl-[23px]">
      {
        instructions.map((each, index) => {
          const [heading, content] = each.split(":");
          return <li className="text-stone600 pl-4 min-[375px]:!text-base tracking-[-0.01em] leading-[1.05]" key={index}>
            <b className="font-bold">{heading}</b>: {content}
          </li>
        })
      }
    </ol>
    </div>
  )
}

export default Instructions;