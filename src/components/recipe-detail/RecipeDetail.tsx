import { Col, Row } from "antd";
import { Typography } from 'antd';

import { RecipeDetailProps } from "../../types/recipe-app-types";

const { Title } = Typography;

const RecipeDetail: React.FC<RecipeDetailProps> = ({
  recipeName,
  recipeDescription,
  preparationTime,
}) => {
  return (
    <Row>
      <Col>
        <Title level={1}>{recipeName}</Title>
      </Col>
      <Col>
        <p>{recipeDescription}</p>
      </Col>
      <Col>
        <p>Preparation time</p>
        <ul className="list-disc pl-4">
          {Object.entries(preparationTime).map(([key, value]) => (
            <li key={key}>
              <b>{key.charAt(0).toUpperCase() + key.slice(1)}</b>: {value}
            </li>
          ))}
        </ul>

      </Col>
    </Row>
  );
};

export default RecipeDetail;
