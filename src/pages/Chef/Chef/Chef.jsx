import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import RecipeCard from '../RecipeCard/RecipeCard';

const Chef = () => {
    const { chef, recipes } = useLoaderData();
    return (
        <div>
            <ChefDetails
                chef={chef}
            ></ChefDetails>
            <hr className='border-2 mx-auto border-slate-900' />
            <div className='lg:container mx-auto'>
                <h1 className='text-center text-6xl font-bold my-12'>Recipes</h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-12'>
                    {
                        recipes.map(recipe => <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        ></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;