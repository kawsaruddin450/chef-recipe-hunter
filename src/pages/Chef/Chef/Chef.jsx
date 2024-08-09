import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';

const Chef = () => {
    const { chef, recipes } = useLoaderData();
    return (
        <div>
            <ChefDetails
                chef={chef}
            ></ChefDetails>
            <hr className='border-2 mx-auto border-slate-900' />
            <div className='lg:container'>
                <h1 className='text-center text-6xl font-bold my-12'>Recipes</h1>
            </div>
        </div>
    );
};

export default Chef;