import { Image } from 'antd';
import { RecipeImageProps } from '../../types/recipe-app-types';

const RecipeImage: React.FC<RecipeImageProps> = ({recipe_img, className}) => {
  return (
    <Image
    className={className}
    src={recipe_img}
  />
  )
}

export default RecipeImage;