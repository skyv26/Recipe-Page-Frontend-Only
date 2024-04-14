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
        <ul>
          {Object.entries(preparationTime).map(([key, value]) => (
            <li key={key}>
              <b>{key}</b>: {value}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default RecipeDetail;
