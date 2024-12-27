import { Image } from 'antd';
import { RecipeImageProps } from '../../types/recipe-app-types';

const RecipeImage: React.FC<RecipeImageProps> = ({recipeImg, className}) => {
  return (
    <Image
    className={className}
    src={recipeImg}
  />
  )
}

export default RecipeImage;