import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 className='font-bold text-center mb-12 mt-28 text-4xl'>Our Chefs</h2>
            <div className='lg:container mx-auto mb-28 grid lg:grid-cols-3 sm:grid-cols-2 gap-4'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Home;