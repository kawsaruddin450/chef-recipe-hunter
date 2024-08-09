import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { id, name, image_link, description } = recipe;
    return (
        <div>
            <div className="card bg-base-100 w-3/4 mx-auto sm:w-full shadow-xl">
                <figure>
                    <img
                        className='p-4 rounded'
                        src={image_link}
                        alt="Recipe image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-green-300">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;