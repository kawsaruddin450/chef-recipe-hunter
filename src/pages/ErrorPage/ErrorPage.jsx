import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center my-32'>
            <h1 className='text-4xl'>Oopss... we have an error!</h1>
            <p className='text-7xl font-bold text-green-300'>{error.statusText || error.message}!</p>
        </div>
    );
};

export default ErrorPage;