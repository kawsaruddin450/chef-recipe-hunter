import React from 'react';
import Chef from '../Chef/Chef';

const ChefDetails = ({chef}) => {
    const {id, name, ratings, restaurant, image_link, recipe_count, experience} = chef;
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={image_link}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <p className='text-2xl'>Recipe: <span className='font-semibold'>{recipe_count}</span></p>
                        <p className='text-2xl'>Experience: <span className='font-semibold'>{experience}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;