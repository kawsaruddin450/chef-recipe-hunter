import React from 'react';
import { FaNutritionix } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { MdFastfood, MdHealthAndSafety } from 'react-icons/md';

const Priorities = () => {
    return (
        <div className='lg:container mx-auto grid sm:grid-cols-3 gap-8 mb-28'>
            <div className='text-center shadow-xl rounded py-8 border-2 border-green-300 w-3/4 sm:w-full mx-auto'>
                <MdHealthAndSafety className='text-4xl font-bold mx-auto'></MdHealthAndSafety>
                <h3 className='text-2xl font-bold'>Nutrition</h3>
                <p className='text-slate-600 px-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quibusdam.</p>
            </div>
            <div className='text-center shadow-xl rounded py-8 border-2 border-green-300 w-3/4 sm:w-full mx-auto'>
                <MdFastfood className='text-4xl font-bold mx-auto'></MdFastfood>
                <h3 className='text-2xl font-bold'>Taste</h3>
                <p className='text-slate-600 px-4 mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, explicabo?</p>
            </div>
            <div className='text-center shadow-xl rounded py-8 border-2 border-green-300 w-3/4 sm:w-full mx-auto'>
                <IoDiamond className='text-4xl font-bold mx-auto'></IoDiamond>
                <h3 className='text-2xl font-bold'>Authenticity</h3>
                <p className='text-slate-600 px-4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sequi.</p>
            </div>
        </div>
    );
};

export default Priorities;