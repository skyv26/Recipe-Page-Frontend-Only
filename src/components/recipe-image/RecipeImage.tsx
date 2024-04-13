import { Image } from 'antd';
import { RecipeImageProps } from '../../types/recipe-app-types';

const RecipeImage: React.FC<RecipeImageProps> = ({recipe_img="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png", className}) => {
  return (
    <Image
    className={className}
    src={recipe_img}
  />
  )
}

export default RecipeImage;