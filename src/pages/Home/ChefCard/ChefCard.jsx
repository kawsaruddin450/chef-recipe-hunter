import React from 'react';

const ChefCard = ({chef}) => {
    const {id, name, rating, image_link, list_of_recipes, recipe_count, experience} = chef;
    return (
        <div>
            <div className="card bg-base-100 w-3/4 mx-auto sm:w-full shadow-xl">
                <figure>
                    <img
                        src={image_link}
                        alt="Chef Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;