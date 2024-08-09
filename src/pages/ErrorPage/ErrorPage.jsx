import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className=''>
            <Header></Header>
            <div className='min-h-screen text-center my-32'>
                <h1 className='text-4xl'>Oopss... we have an error!</h1>
                <p className='text-7xl font-bold text-green-300'>{error.statusText || error.message}!</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;