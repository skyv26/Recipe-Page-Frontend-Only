export interface RecipeImageProps {
    recipe_img: string;
    className: string;
};

// types.ts
export interface Nutrition {
    name: string;
    value: string;
}

export interface RecipeContainerType {
    currentIndex: number;
};

export interface Recipe {
    recipe: string;
    img: string;
    description: string;
    preparationTime: {
        total: string;
        preparation: string;
        cooking: string;
    };
    ingredients: string[];
    instructions: string[];
    nutrition: Nutrition[];
}

export interface RecipeContextType {
    recipes: Recipe[] | null;
    loading: boolean;
    error: string | null;
}
