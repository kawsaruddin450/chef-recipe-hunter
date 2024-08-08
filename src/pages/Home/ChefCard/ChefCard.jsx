import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import Rating from 'react-rating';

const ChefCard = ({ chef }) => {
    const { id, name, ratings, image_link, list_of_recipes, recipe_count, restaurant, experience } = chef;
    return (
        <div>
            <div className="card bg-base-100 w-3/4 mx-auto sm:w-full shadow-xl">
                <figure>
                    <img
                        src={image_link}
                        alt="Chef Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className='text-xl'>Experience: <span className='font-semibold'>{experience}</span></p>
                    <p className='text-xl'>Recipes: <span className='font-semibold'>{recipe_count}</span></p>
                    <p className='text-xl'>Restaurant: <span className='font-semibold'>{restaurant}</span></p>
                    <div className='flex justify-between items-center mt-8'>
                        <div>
                            <Rating
                                className='text-warning text-xl'
                                readonly
                                placeholderRating={ratings}
                                emptySymbol={<CiStar></CiStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            />
                            <span className='ml-2 text-xl'>{ratings}</span>
                        </div>
                        <div className="card-actions justify-start">
                            <button className="btn bg-green-300 font-semibold">View Recipes <FaArrowRightLong></FaArrowRightLong> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;