import { Image } from 'antd';
import { RecipeImageProps } from '../../types/recipe-app-types';

const RecipeImage: React.FC<RecipeImageProps> = ({recipeImg, className}) => {
  return (
    <Image
    alt='recipe'
    className={className}
    src={recipeImg}
  />
  )
}

export default RecipeImage;