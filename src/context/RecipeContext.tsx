import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Recipe, RecipeContextType } from '../types/recipe-app-types';

// Initial context value
const defaultContext: RecipeContextType = {
  recipes: null,
  loading: true,
  error: null,
};

// Create the context
export const RecipeContext = createContext<RecipeContextType>(defaultContext);

// Provider component props
interface RecipeProviderProps {
  children: ReactNode;
}

// Provider component
export const RecipeProvider: React.FC<RecipeProviderProps> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('data.json'); // Replace with your JSON file's URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Recipe[] = await response.json();
        setRecipes(data);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading, error }}>
      {children}
    </RecipeContext.Provider>
  );
};
