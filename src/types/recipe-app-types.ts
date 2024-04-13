// types.ts

// Nutrition type
export interface NutritionProps {
    key?: string | number;
    name: string;
    value: string;
}

// Preparation Time structure
export interface PreparationTime {
    total: string;
    preparation: string;
    cooking: string;
}

// Recipe Detail Props
export interface RecipeDetailProps {
    recipeName: string; // Changed naming to camelCase for consistency
    recipeDescription: string;
    preparationTime: PreparationTime;
}

// Recipe Image Props
export interface RecipeImageProps {
    recipeImg: string; // Changed to camelCase
    className: string;
}

// Recipe structure
export interface Recipe {
    name: string; // Changed "recipe" to "name" for clarity
    img: string; // Changed "img" to "image" for consistency
    description: string;
    preparationTime: PreparationTime;
    ingredients: string[];
    instructions: string[];
    nutrition: NutritionProps;
}

// Context type for Recipes
export interface RecipeContextType {
    recipes: Recipe[] | null;
    loading: boolean; // Changed "loading" to "isLoading" for better readability
    error: string | null;
}

// Recipe Container Type
export interface RecipeContainerProps {
    currentIndex: number;
}
