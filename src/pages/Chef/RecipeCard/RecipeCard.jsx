import React from 'react';
import { FaRegClock, FaRegStar, FaStar } from 'react-icons/fa';
import { GoDash } from 'react-icons/go';
import Rating from 'react-rating';

const RecipeCard = ({ recipe }) => {
    const { id, name, image_link, description, ratings, cook_time, ingredients, instructions } = recipe;
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
                    <h2 className="card-title font-bold text-2xl">{name}</h2>
                    <p>{description}</p>
                    <h2 className='text-xl font-semibold'>Ingredients: </h2>
                    <ul className='pl-2'>
                        {
                            ingredients.map(ingredient => <li> <GoDash className='inline text-green-300' /> {ingredient}</li>)
                        }
                    </ul>
                    <h2 className='text-xl font-semibold'>Instructions: </h2>
                    <p className='pl-2 mb-3'>{instructions}</p>
                    <hr className='border-1 border-green-300'/>
                    <div className='flex justify-between items-center mt-3'>
                        <div className='text-xl mx-0'>
                            <Rating
                                className='text-warning'
                                readonly
                                placeholderRating={ratings}
                                emptySymbol={ <FaRegStar></FaRegStar> }
                                placeholderSymbol={ <FaStar></FaStar> }
                                fullSymbol={ <FaStar></FaStar> }
                            /> <span className='ml-2'>{ratings}</span>
                        </div>
                        <div className='mx-0 items-center'>
                            <FaRegClock className='inline'></FaRegClock> <span>{cook_time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;